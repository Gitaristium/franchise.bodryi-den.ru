$(document).ready(function () {
    if (document.getElementById("ya-map") !== null) {
        let POINTS = [];
        const apiKey = "c6e7159c-1efe-4612-8ca8-9eb9574ae925";

        // запрашиваем список адресов с БД
        $.ajax({
            url: "get-map-points.php",
            type: "POST", //метод отправки
            success: function (data) {
                POINTS = JSON.parse(data);
                $.each(POINTS, function (index, elem) {
                    // если координаты не заполнены - запрашиваем геокодинг
                    if (!elem.coordinates) {
                        yaGeo(elem);
                    }
                    // если заполнены - делаем из строчки массив
                    else {
                        elem.coordinates = elem.coordinates.split("+");
                    }
                });
            },
            error: function (data) {
                console.log("Bitrix Error: " + data);
            },
        }).then(function () {
            YA(POINTS);
        });

        // декодируем адреса в координаты
        const yaGeo = async (elem) => {
            const find = elem.address.replace(/ /gi, "+");
            $.ajax({
                url:
                    "https://geocode-maps.yandex.ru/1.x?apikey=" +
                    apiKey +
                    "&geocode=" +
                    find +
                    "&format=json&results=100",
                // type: "POST", //метод отправки

                success: function (res) {
                    setNewCoords(res, elem);
                },
                error: function (res) {
                    console.log("Yandex Error: " + response);
                },
            });
        };

        // записываем новые координаты в БД
        const setNewCoords = async (res, elem) => {
            const newCoordinates =
                res.response.GeoObjectCollection.featureMember[0].GeoObject
                    .Point.pos;
            elem.coordinates = newCoordinates.split(" ");

            $.ajax({
                url: "set-map-points.php",
                type: "post",
                dataType: "json",
                data: {
                    id: elem.ID,
                    coords: elem.coordinates.join("+"),
                },
                success: function (r) {
                    console.log("updated: " + elem.address);
                },
                error: function (r) {
                    console.log(r);
                },
            });
        };

        // инициализируем YA-карту
        const YA = (list) => {
            //Яндекс.Карты
            let map;
            main();
            async function main() {
                await ymaps3.ready;
                const {
                    YMap,
                    YMapDefaultSchemeLayer,
                    YMapDefaultFeaturesLayer,
                    YMapFeatureDataSource,
                    YMapLayer,
                    YMapControls,
                    YMapMarker,
                    YMapControlButton,
                    YMapControl,
                    YMapCollection,
                    YMapDefaultMarker,
                } = ymaps3;

                const LOCATION = {
                    center: [82.92043, 55.030204],
                    // zoom: 12,
                    zoom: 3,
                    worldOptions: {
                        cycledX: false,
                        cycledY: false,
                    },
                };
                const { YMapZoomControl, YMapGeolocationControl } =
                    await ymaps3.import("@yandex/ymaps3-controls@0.0.1");

                const map = new YMap(document.getElementById("ya-map"), {
                    zoomRange: { min: 3, max: 30 },
                    location: LOCATION,
                });
                map.addChild(new YMapDefaultSchemeLayer());
                map.addChild(new YMapDefaultFeaturesLayer());

                map.addChild(
                    new YMapControls({ position: "right" })
                        .addChild(new YMapZoomControl())
                        .addChild(new YMapGeolocationControl())
                );

                const pin = (props) => {
                    const pin = document.createElement("img");
                    pin.className = "ya-map__pin";
                    pin.src = "./assets/theme/img/map/pin.svg";
                    pin.onclick = () =>
                        map.setLocation({
                            center: props.coordinates,
                            zoom: 17,
                            duration: 700,
                        });

                    return pin;
                };

                const pin2 = (props) => {
                    const pin2 = document.createElement("div");
                    pin2.className = "ya-map__marker";

                    pin2.innerHTML = `<img class="ya-map__pin" src="./assets/theme/img/map/pin.svg">
                                        <div class="ya-map__popup">
                                            <div class="ya-map__popup-inner">
                                                <button class="ya-map__popup-close">
                                                    <div class="ya-map__popup-close-inner"><span></span><span></span></div>
                                                </button>
                                                <h5 class="ya-map__popup-title">${props.name}</h5>
                                                <p class="ya-map__popup-format">Формат: ${props.format}</p>
                                            </div>
                                        </div>`;
                    pin2.querySelector(".ya-map__popup-close").onclick = (
                        event
                    ) => {
                        event.stopPropagation();
                        pin2.querySelector(".ya-map__popup").classList.remove(
                            "_active"
                        );
                    };
                    pin2.onclick = () => {
                        map.setLocation({
                            center: props.coordinates,
                            zoom: 17,
                            duration: 700,
                        });
                        pin2.querySelector(".ya-map__popup").classList.add(
                            "_active"
                        );
                    };

                    return pin2;
                };

                if (list.length > 0) {
                    list.forEach((marker) => {
                        if (marker.coordinates) {
                            map.addChild(
                                new YMapMarker(
                                    {
                                        coordinates: marker.coordinates,
                                        popupContent: "Good text here",
                                    },
                                    pin2(marker)
                                )
                            );
                        }
                    });
                }
            }
        };
    }
});

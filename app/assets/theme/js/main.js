$(document).ready(function () {
    $(window).scroll(function () {
        $(".anim").each(function () {
            var offsetTop = $(this)[0].getBoundingClientRect().top;
            var height = $(this).height();
            var windowHeight = $(window).height();
            var offsetBottom = offsetTop + height;

            if (offsetTop <= windowHeight && offsetBottom >= 0) {
                $(this).addClass("anim--play");
            } else {
                $(this).hasClass("anim--play") &&
                    $(this).removeClass("anim--play");
            }
        });

        $(".show").each(function () {
            var offsetTop = $(this)[0].getBoundingClientRect().top;
            var height = $(this).height();
            var windowHeight = $(window).height();
            var pointToPlay = windowHeight - windowHeight / 5;
            var offsetBottom = offsetTop + height;

            if (offsetTop <= pointToPlay && offsetBottom >= 0) {
                $(this).addClass("show--play");
            }
        });
    });

    setTimeout(() => {
        $(".offer__title").addClass("show--play");
    }, 1000);
    setTimeout(() => {
        $(".offer__subtitle").addClass("show--play");
    }, 1300);
    setTimeout(() => {
        $(".offer__button").addClass("show--play");
    }, 1600);
    setTimeout(() => {
        $(".offer__button").addClass("shake-bottom");
    }, 2300);
    setTimeout(() => {
        $(" .offer__img").addClass("bounce-in-right");
    }, 500);
});

$(document).ready(function () {
    $("#burger-btn").click(function () {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#burger-menu").addClass("active");
    });

    $("#burger-menu .overlay, #burger-menu .nav-link").click(function (e) {
        // event.preventDefault();
        $("#burger-btn").removeClass("active");
        $("#burger-menu").addClass("inactive");

        setTimeout(() => {
            $("#burger-menu").removeClass("active inactive");
        }, 500);
    });

    $("#burger-menu #btn-nav-call-burger").click(function (e) {
        event.preventDefault();
        $("#burger-btn").removeClass("active");
        $("#burger-menu").addClass("inactive");

        setTimeout(() => {
            $("#burger-menu").removeClass("active inactive");
            $("#popup").addClass("active");
        }, 500);
    });
});

// калькулятор
$(document).ready(function () {
    if (document.getElementById("calculator") !== null) {
        function Calculator() {
            this.conversion = {
                tc: 1,
                bc: 5,
                street: 1,
            }; //конверсия в покупателей
            this.primeCost = {
                leasing: 0.45, //себестоимость при арендованном оборудовании
                buyed: 0.33, //себестоимость при купленном оборудовании
            }; //себестоимость
            this.passability = 2014; // проходимость
            this.averageBill = 250; // средний чек
            this.taxes = 0; // налоги
            this.taxesrate = 0.06; // ставка налога
            this.rent = 45000; // аренда
            this.salary = 50000;
            this.internet = 200;
            this.electricity = 1500;
            this.days = 31;
            this.equipment = "buyed"; //Оборудование
            this.place = "tc";
            this.maxProfit = 1000000;
            this.raw = 0; //себестоимость сырья за месяц
            this.pureProfit = 0; //чистая прибыль
            this.total = 0;
            this.conver = 1; // конверсия
            this.cost = 0; //процент рентабельности
            this.amountBill = 0; //количество чеков в день

            this.calculate = function () {
                this.amountBill = Math.round(
                    (this.passability * this.conver) / 100
                );
                var profit = this.amountBill * this.averageBill * this.days; //общая выручка за месяц
                this.raw = Math.round(
                    this.primeCost[this.equipment] *
                        this.amountBill *
                        this.averageBill *
                        this.days
                ); //себестоимость сырья за месяц
                this.taxes = Math.round(
                    this.amountBill *
                        this.averageBill *
                        this.days *
                        this.taxesrate
                ); //налог по усн 6 проц
                var costs =
                    this.rent +
                    this.raw +
                    this.taxes +
                    this.internet +
                    this.electricity +
                    this.salary; //затраты
                this.cost = Math.round(
                    100 -
                        ((this.rent +
                            1200 +
                            this.taxes +
                            this.internet +
                            this.electricity +
                            this.salary) /
                            profit) *
                            100 -
                        this.primeCost[this.equipment] * 100
                ); //процент рентабельности
                var pureProfit = profit - costs;
                this.total = profit;
                this.pureProfit = pureProfit;

                return pureProfit;
            };
        }

        var updateView = function (calculator) {
            var profit = Math.round(calculator.calculate());
            var strokeParams = "0 829";

            $("#raw").html(calculator.raw);
            $("#rent").html(calculator.rent);
            $("#taxes").html(calculator.taxes);
            $("#cost").html(calculator.cost + "%");
            $("#total").html(calculator.total);
            $("#conver").html(calculator.conver + "%");

            $(".calculator-profit__number").html(profit + " руб");
            var percentage = profit / calculator.maxProfit;
            var circle = document.querySelector(".calculator-profit__glow");
            var circleLength = circle.getTotalLength();
            if (percentage > 0) {
                var angle = -90;
                $(".calculator-profit__glow").css({
                    transform: "rotate(" + angle + "deg)",
                    stroke: "#00ff0b",
                });
                $(".calculator-profit__glow").css(
                    "stroke-dasharray",
                    circleLength * percentage + " " + circleLength
                );
            } else {
                var angle = -90 + percentage * 360;
                $(".calculator-profit__glow").css({
                    transform: "rotate(" + angle + "deg)",
                    stroke: "red",
                });
                $(".calculator-profit__glow").css(
                    "stroke-dasharray",
                    -circleLength * percentage + " " + circleLength
                );
            }
        };

        var calculator = new Calculator();

        var sliderPassability = document.getElementById("slider-passability");
        noUiSlider.create(sliderPassability, {
            start: [6000],
            tooltips: wNumb({ decimals: 0 }),
            connect: "lower",
            range: {
                min: 500,
                max: 10000,
            },
            format: wNumb({
                decimals: 0,
            }),
        });

        var sliderPrice = document.getElementById("slider-price");

        noUiSlider.create(sliderPrice, {
            start: [51500],
            tooltips: wNumb({ decimals: 0 }),
            connect: "lower",
            range: {
                min: 5000,
                max: 150000,
            },
            format: wNumb({
                decimals: 0,
            }),
        });

        var sliderConversion = document.getElementById("slider-conversion");

        noUiSlider.create(sliderConversion, {
            start: [1],
            tooltips: true,
            connect: "lower",
            range: {
                min: 1,
                max: 10,
            },
            // format: wNumb({
            //     decimals: 0,
            // }),
        });

        updateView(calculator);

        sliderPassability.noUiSlider.on("update", function () {
            calculator.passability = eval(sliderPassability.noUiSlider.get());
            updateView(calculator);
        });
        sliderPrice.noUiSlider.on("update", function () {
            calculator.rent = eval(sliderPrice.noUiSlider.get());
            updateView(calculator);
        });
        sliderConversion.noUiSlider.on("update", function () {
            calculator.conver = eval(sliderConversion.noUiSlider.get());
            updateView(calculator);
        });

        $("input[type=radio][name=calculator-places]").change(function () {
            calculator.place = this.value;
            if (this.value == "tc") {
                calculator.passability = 6000;
                calculator.rent = 51500;
                sliderPassability.noUiSlider.set(6000);
                sliderPrice.noUiSlider.set(51500);
                sliderConversion.noUiSlider.set(1);
                calculator.conver = 1;
                $(".text-places").text(
                    "Средними значениями для торгового центра являются проходимость 6000 человек в день при аренде 51500 рублей."
                );
            }
            if (this.value == "bc") {
                calculator.passability = 1000;
                calculator.rent = 14500;
                calculator.conver = 5;
                sliderPassability.noUiSlider.set(1000);
                sliderPrice.noUiSlider.set(14500);
                sliderConversion.noUiSlider.set(5);
                $(".text-places").text(
                    "Средними значениями для бизнес центра являются проходимость 1000 человек в день при аренде 14500 рублей."
                );
            }
            if (this.value == "street") {
                calculator.passability = 5000;
                calculator.rent = 23000;
                calculator.conver = 1;
                sliderPassability.noUiSlider.set(5000);
                sliderPrice.noUiSlider.set(23000);
                sliderConversion.noUiSlider.set(1);
                $(".text-places").text(
                    "Средними значениями для улицы являются проходимость 5000 человек в день при аренде 23000 рублей."
                );
            }

            updateView(calculator);
        });
    }

    // крутим вертим
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
    } else {
        $("#calculator").on("mousemove", (e) => {
            const x = -(e.pageX - $(window).width() / 2);
            const y = -(
                e.pageY -
                $("#calculator").offset().top -
                $(window).height() / 2
            );

            $(".calculator-profit")
                .css(
                    "transform",
                    // 'translate(' + x * 0.005 + 'px, ' + y * 0.005 + 'px) perspective(500px)'
                    "perspective(500px) rotateY(" +
                        -x * 0.015 +
                        "deg) rotateX(" +
                        y * 0.03 +
                        "deg) translate(" +
                        -x * 0.015 +
                        "px, " +
                        -y * 0.03 +
                        "px)"
                )
                .css(
                    "box-shadow",
                    "#0077ff " + x * 0.005 + "px " + y * 0.01 + "px 10px"
                );
            // $('.calculator-profit__number').css(
            //   'transform',
            //   'translate(' + (-x) * 0.007 + 'px, ' + (-y) * 0.014 + 'px)'
            // );
            // $('.calculator-profit__label').css(
            //   'transform',
            //   'translate(' + (-x) * 0.007 + 'px, ' + (-y) * 0.014 + 'px)'
            // );
        });
    }
});

// ввод только цифр в поле input tel
$(document).ready(function () {
    // AJAX отправка формы
    /* Article FructCode.com */
    $("#btn-ajax__form").click(function (e) {
        event.preventDefault();

        $("#ajax__form input").removeClass("error error-mail");
        if (
            $('#ajax__form input[name="user__name"]').val().length > 0 &&
            $('#ajax__form input[name="user__city"]').val().length > 0 &&
            $('#ajax__form input[name="user__phone"]').val().length > 0
        ) {
            if ($('#ajax__form input[name="user__email"]').val().length > 0) {
                var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
                var mail = $('#ajax__form input[name="user__email"]').val();
                if (mail.search(pattern) == 0) {
                    sendAjaxForm("result_form", "ajax__form", "send.php");

                    return false;
                } else {
                    $('#ajax__form input[name="user__email"]').addClass(
                        "error-mail"
                    );
                }
            } else {
                sendAjaxForm("result_form", "ajax__form", "send.php");

                return false;
            }
        } else {
            $("#ajax__form input").each(function () {
                $(this).attr("aria-required") == "true" &&
                    $(this).val().length == 0 &&
                    $(this).addClass("error");
            });

            //.addClass("error");
        }
    });

    $("#btn-ajax__modal").click(function (e) {
        event.preventDefault();
        $("#ajax__modal input").removeClass("error error-mail");
        if (
            $('#ajax__modal input[name="user__name"]').val().length > 0 &&
            $('#ajax__modal input[name="user__city"]').val().length > 0 &&
            $('#ajax__modal input[name="user__phone"]').val().length > 0
        ) {
            if ($('#ajax__modal input[name="user__email"]').val().length > 0) {
                var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
                var mail = $('#ajax__modal input[name="user__email"]').val();
                if (mail.search(pattern) == 0) {
                    sendAjaxModal("result_form", "ajax__modal", "send.php");

                    return false;
                } else {
                    $('#ajax__modal input[name="user__email"]').addClass(
                        "error-mail"
                    );
                }
            } else {
                sendAjaxModal("result_form", "ajax__modal", "send.php");

                return false;
            }
        } else {
            $("#ajax__modal input").each(function () {
                $(this).attr("aria-required") == "true" &&
                    $(this).val().length == 0 &&
                    $(this).addClass("error");
            });

            //.addClass("error");
        }
    });

    $(".input-box").click(function (e) {
        $(this).children("input").removeClass("error error-mail");
    });

    function sendAjaxForm(result_form, ajax__form, url) {
        $(".input__btn").text("отправляем").prop("disabled", true);
        $.ajax({
            url: "send.php",
            type: "POST", //метод отправки
            dataType: "html", //формат данных
            data: $("#" + ajax__form).serialize(), // Сеарилизуем объект
            success: function (response) {
                //Данные отправлены успешно
                $("#sended").addClass("active");
                setTimeout(() => {
                    $(".input").val("");
                }, 1000);
                // ym(87461192, "reachGoal", "send_form");
                $(".input__btn")
                    .text("получить бизнес-план")
                    .prop("disabled", false);
                ym(
                    95060645,
                    "reachGoal",
                    $('#ajax__form input[name="click__ya-target"]').val()
                );
            },
            error: function (response) {
                // Данные не отправлены
                alert("error");
                $(".input__btn")
                    .text("получить бизнес-план")
                    .prop("disabled", false);
            },
        });
    }
    function sendAjaxModal(result_form, ajax__modal, url) {
        $(".input__btn").text("отправляем").prop("disabled", true);
        $.ajax({
            url: "send.php",
            type: "POST", //метод отправки
            dataType: "html", //формат данных
            data: $("#" + ajax__modal).serialize(), // Сеарилизуем объект
            success: function (response) {
                //Данные отправлены успешно
                $("#popup").addClass("inactive");

                setTimeout(() => {
                    $("#popup").removeClass("active inactive");
                    $("#sended").addClass("active");
                }, 500);

                setTimeout(() => {
                    $(".input").val("");
                }, 1000);
                // ym(87461192, "reachGoal", "send_form");
                $(".input__btn")
                    .text("получить бизнес-план")
                    .prop("disabled", false);
                ym(
                    95060645,
                    "reachGoal",
                    $('#ajax__modal input[name="click__ya-target"]').val()
                );
            },
            error: function (response) {
                // Данные не отправлены
                // alert("error");
                $(".input__btn")
                    .text("получить бизнес-план")
                    .prop("disabled", false);
            },
        });
    }

    // ввод только цифр в поле input tel
    var telInput = $('input[type="tel"]');

    for (var i = 0; i < telInput.length; i++) {
        telInput[i].oninput = function () {
            dpcmTel(this);
        };
    }
    function dpcmTel(input) {
        var value = input.value;
        var re = /[^0-9\-\(\)\+\ ]/gi;
        if (re.test(value)) {
            value = value.replace(re, "");
            input.value = value;
        }
    }
});

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

$(document).ready(function () {
    $(".get-plan").click(function (e) {
        event.preventDefault();
        $("#popup").addClass("active");

        switch (true) {
            case $(this).is("#btn-nav-call"):
                $("#input__click__place").val("Шапка сайта");
                $("#input__click__ya-target").val("new-lead--header");
                break;
            case $(this).is("#btn-nav-call-burger"):
                $("#input__click__place").val("Бургер-меню (мобилка)");
                $("#input__click__ya-target").val("new-lead--burger");
                break;
            case $(this).is("#btn-offer"):
                $("#input__click__place").val("Оффер");
                $("#input__click__ya-target").val("new-lead--offer");
                break;
            case $(this).is("#btn-formats-1"):
                $("#input__click__place").val("Форматы: киоски и павильоны");
                $("#input__click__ya-target").val("new-lead--formats-1");
                break;
            case $(this).is("#btn-formats-2"):
                $("#input__click__place").val("Форматы: кофейня с кухней");
                $("#input__click__ya-target").val("new-lead--formats-2");
                break;
            case $(this).is("#btn-formats-3"):
                $("#input__click__place").val("Форматы: кофейня с посадкой");
                $("#input__click__ya-target").val("new-lead--formats-3");
                break;
            case $(this).is("#btn-formats-4"):
                $("#input__click__place").val("Форматы: островок с посадкой");
                $("#input__click__ya-target").val("new-lead--formats-4");
                break;
            case $(this).is("#btn-formats-5"):
                $("#input__click__place").val("Форматы: кофейный островок");
                $("#input__click__ya-target").val("new-lead--formats-5");
                break;
            case $(this).is("#btn-formats-6"):
                $("#input__click__place").val("Форматы: стрит");
                $("#input__click__ya-target").val("new-lead--formats-6");
                break;
            case $(this).is("#btn-calculator"):
                $("#input__click__place").val("Калькулятор");
                $("#input__click__ya-target").val("new-lead--calculator");
                break;
            default:
                break;
        }
    });

    $("#popup .overlay, #popup .close").click(function (e) {
        event.preventDefault();
        $("#popup").addClass("inactive");

        setTimeout(() => {
            $("#popup").removeClass("active inactive");
            $("#input__click__place").val("");
        }, 500);
    });

    $("#sended .overlay, #sended .close").click(function (e) {
        event.preventDefault();
        $("#sended").addClass("inactive");

        setTimeout(() => {
            $("#sended").removeClass("active inactive");
        }, 500);
    });
});

$(document).ready(function () {
    if (document.getElementById("formats-slider-main") !== null) {
        var splide = new Splide("#formats-slider-main", {
            // padding: { left: 50, right: 100 },
            focus: "center",
            gap: "2.8125vw",
            autoWidth: true,
            rewind: true,
            pagination: false,
            arrows: false,
            breakpoints: {
                768: {
                    gap: "6.25vw",
                },
            },
        });
        var thumbnails = new Splide("#formats-slider-thumbnail", {
            autoWidth: true,
            gap: "3.75vw",
            rewind: true,
            pagination: false,
            isNavigation: true,
            arrows: false,
            breakpoints: {
                768: {
                    gap: "7.5vw",
                },
            },
        });

        splide.sync(thumbnails);
        splide.mount();
        thumbnails.mount();
    }
});

$(document).ready(function () {
    if (document.getElementById("youtube-slider") !== null) {
        new Splide("#menu-slider", {
            width: "28.9375vw",
            breakpoints: {
                768: {
                    width: "90.625vw",
                    arrows: false,
                },
            },
            autoWidth: true,
            cover: true,
            updateOnMove: true,
            pagination: true,
            arrows: true,
            perPage: 1,
            type: "loop",
        }).mount();
    }
});

$(document).ready(function () {
    if (document.getElementById("youtube-slider") !== null) {
        new Splide("#youtube-slider", {
            width: "51.25vw",
            autoWidth: true,
            cover: true,
            updateOnMove: true,
            pagination: true,
            arrows: true,
            breakpoints: {
                768: {
                    width: "90.625vw",
                    arrows: false,
                },
            },
            perPage: 1,
            type: "loop",
            video: {
                loop: true,
            },
        }).mount(window.splide.Extensions);
    }
});

$(document).ready(function () {
    $(".stage-item").click(function (e) {
        $(this).children(".stage-item__desc").toggleClass("active");
    });
});

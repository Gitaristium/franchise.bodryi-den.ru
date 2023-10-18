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

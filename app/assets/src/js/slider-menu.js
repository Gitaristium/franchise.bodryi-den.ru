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

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

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

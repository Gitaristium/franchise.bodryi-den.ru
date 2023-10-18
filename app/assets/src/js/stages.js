$(document).ready(function () {
    $(".stage-item").click(function (e) {
        $(this).children(".stage-item__desc").toggleClass("active");
    });
});

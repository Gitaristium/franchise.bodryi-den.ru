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

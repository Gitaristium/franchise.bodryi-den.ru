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

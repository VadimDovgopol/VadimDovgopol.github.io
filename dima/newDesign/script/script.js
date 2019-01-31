$(document).ready(function () {
    $(".more-info").on("click", function () {

        if ($(".reg-text").hasClass("active")) {

            $(".reg-text").removeClass("active");
            $(".close").addClass("active");
            $(".open").removeClass("active");

        } else {
            $(".reg-text").addClass("active");
            $(".close").removeClass("active");
            $(".open").addClass("active");
        }
    })


    $('.slider-exchange_in').slick({
        arrows: true,
        prevArrow: ".prev",
        nextArrow: ".next",
        speed: 200,
        fade: true,
        cssEase: 'linear'
    });

    $('.slider-purse_in').slick({
        arrows: true,
        prevArrow: ".prev2",
        nextArrow: ".next2",
        speed: 200,
        fade: true,
        cssEase: 'linear'
    });

    $('.slider-changer_in').slick({
        arrows: true,
        prevArrow: ".prev3",
        nextArrow: ".next3",
        speed: 200,
        fade: true,
        cssEase: 'linear'
    });

    // $('.slider-currency').slick({
    //     arrows: false,
    //     speed: 3000,
    //     autoplay: true,
    //     autoplaySpeed: 0,
    //     slidesToShow: 5,
    // });
});

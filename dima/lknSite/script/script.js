$(document).ready(function () {

    let ua = navigator.userAgent.toLowerCase();
    let isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    let iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    let trigger = false;
    let nightMode = localStorage.getItem('nightMode');
    let triggerForspecificationBtn = false;

    var fontSize = localStorage.getItem('font-size');

    if (isAndroid || iOS === true) {
        $("body").addClass("mobile")
    }
    if (nightMode === "true") {
        trigger = true;

    } else {
        trigger = false;
    }

    $(".bottom-text").on("click", function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section11").offset().top
        }, 2000);
    });

    $(".email").on("click", function () {
        $(".input-item").addClass("active")
    })

    $('.section1 .content-wrapper').slick({
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",

        autoplay: true,
        autoplaySpeed: 2000,

    });

    $('.section6 .content-mob').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '30px',
        // variableWidth: true
    });
    $('.section8 .content-mob').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '30px',
        // variableWidth: true
    });
    $('.section10 .content-mob').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '30px',
        // variableWidth: true
    });

    $(".slick-arrow").on("click", function () {
        $('.section1 .content-wrapper').slick('slickPause');
    });

    $('.section1 .content-wrapper').on('swipe', function (event, slick, direction) {
        $('.section1 .content-wrapper').slick('slickPause');
    });

    $(".nav1").on("click", function () {
        $('.section1 .content-wrapper').slick('slickPause');
        $('.section1 .content-wrapper')[0].slick.slickGoTo(0);
    });
    $(".nav2").on("click", function () {
        $('.section1 .content-wrapper').slick('slickPause');
        $('.section1 .content-wrapper')[0].slick.slickGoTo(1);
    });
    $(".nav3").on("click", function () {
        $('.section1 .content-wrapper').slick('slickPause');
        $('.section1 .content-wrapper')[0].slick.slickGoTo(2);
    });
    $(".nav4").on("click", function () {
        $('.section1 .content-wrapper').slick('slickPause');
        $('.section1 .content-wrapper')[0].slick.slickGoTo(3);
    });
    $(".nav5").on("click", function () {
        $('.section1 .content-wrapper').slick('slickPause');
        $('.section1 .content-wrapper')[0].slick.slickGoTo(4);
    });
    $(".nav6").on("click", function () {
        $('.section1 .content-wrapper').slick('slickPause');
        $('.section1 .content-wrapper')[0].slick.slickGoTo(5);
    });


    $(".mobile-menu_btn").on("click", function () {
        TweenMax.to(".menu-mobile", 0.5, {display: "flex", autoAlpha: 1})
        $("body").addClass("openMenu");
    });

    $(".close-btn").on("click", function () {
        TweenMax.to(".menu-mobile", 0.5, {display: "none", autoAlpha: 0})
        $("body").removeClass("openMenu");
    });

    $(".to-top-btn").on("click", function () {
        $('html,body').animate({scrollTop: 0}, 'slow');
        return false;
    })

    window.onscroll = function () {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled >= 200) {
            $(".header-wrapper").removeClass("static")
        } else {
            $(".header-wrapper").addClass("static")
        }

        if (scrolled >= 500) {
            $(".section1").addClass("active")
            $(".header-wrapper").addClass("active")
        } else {
            $(".header-wrapper").removeClass("active")
            $(".section1").removeClass("active")
        }
    }
});


$(document).ready(function () {

    let ua = navigator.userAgent.toLowerCase();
    let isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    let iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    let trigger = false;
    let nightMode = localStorage.getItem('nightMode');
    let triggerForspecificationBtn = false;

    if (isAndroid || iOS === true) {
        $("body").addClass("mobile")
    }

    if (nightMode === "true") {
        trigger = true;

    } else {
        trigger = false;
    }

    setTimeout(function () {
        $(".specification_text_animation").removeClass("active")
    }, 3000);

    setTimeout(function () {
        $(".specification_btn").addClass("active")
    }, 3300);

    $(".hide-img").on("click", function () {
        $(this).addClass("active");
        $(".show-img").removeClass("active");
        $(".news-block_item").removeClass("show-img");
    });
    $(".show-img").on("click", function () {
        $(this).addClass("active");
        $(".hide-img").removeClass("active");
        $(".news-block_item").addClass("show-img");
    });

    $(".specification_btn").on("click", function () {
        if (triggerForspecificationBtn === false) {
            $(".specification_text_animation").addClass("active");
            $(".specification_btn .show").text("Cпрятать");
            triggerForspecificationBtn = true;
        } else {
            $(".specification_text_animation").removeClass("active");
            setTimeout(function () {
                $(".specification_btn .show").text("показать все");
            }, 300)
            triggerForspecificationBtn = false;
        }
    });

    $('#night-mode_ctrl').on('click', function () {
        console.log("a")
        if (trigger === false) {
            trigger = true;
            localStorage.setItem('nightMode', "true");
            $("body").addClass("night-mode");
        } else {
            trigger = false;
            $("body").removeClass("night-mode");
            localStorage.setItem('nightMode', "false");
        }
    });

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
    });

    $(".open-drop_block").on("click", function () {
        if ($(".drop-block").hasClass("active")) {

            $(".drop-block").removeClass("active")

        } else {
            $(".drop-block").addClass("active")
        }

    });

    $(".drop-block .active").on("click", function () {
        if ($(".drop-block").hasClass("active")) {

            $(".drop-block").removeClass("active")

        } else {
            $(".drop-block").addClass("active")
        }

    });

    $(".search-btn .icon").on("click", function () {

        if ($(".search-input").hasClass("active")) {

            $(".search-input").removeClass("active");
            $(".logo-mob").removeClass("hide");

        } else {
            $(".logo-mob").addClass("hide");
            $(".search-input").addClass("active");
        }

    });

    $(".mobile-open-btn").on("click", function () {

        if ($(".left-column").hasClass("active")) {

            $(".left-column").removeClass("active");
            $("body").removeClass("active");

        } else {
            $("body").addClass("active");
            $(".left-column").addClass("active");

        }

    });

    $(".close-btn").on("click", function () {

        if ($(".left-column").hasClass("active")) {

            $(".left-column").removeClass("active");
            $("body").removeClass("active");

        } else {
            $("body").addClass("active");
            $(".left-column").addClass("active");

        }

    });

    $(".visible-item").on("click", function () {

        if ($(".them-mobile").hasClass("active")) {

            $(".them-mobile").removeClass("active");

        } else {
            $(".them-mobile").addClass("active");

        }

    });

    $(".drop-list").on("click", function () {

        if ($(".drop-list").hasClass("active")) {

            $(".drop-list").removeClass("active");

        } else {
            $(".drop-list").addClass("active");

        }

    });

    $('.slider-exchange_in').slick({
        prevArrow: ".prev",
        nextArrow: ".next",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        speed: 200,
        fade: true,
        cssEase: 'linear',
    });

    $('.slider-purse_in').slick({

        prevArrow: ".prev2",
        nextArrow: ".next2",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        speed: 200,
        fade: true,
        cssEase: 'linear',


    });

    $('.slider-changer_in').slick({
        prevArrow: ".prev3",
        nextArrow: ".next3",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        speed: 200,
        fade: true,
        cssEase: 'linear',

    });


    $('.gallery-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        variableWidth: false,

        asNavFor: '.gallery-nav'

    });
    $('.gallery-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.gallery-for',
        focusOnSelect: true,
        variableWidth: true,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });


    $('#example').barrating({
        theme: 'css-stars'
    });

});

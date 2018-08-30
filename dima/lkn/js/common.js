var ajaxLoading = true;

function yHandler() {
    var url = "./tsconfig.json";
    $.getJSON(url, function (data) {
        console.log(data);
        var item = data.item;
        var url = data.url;
        history.pushState(null, '', url);
        $("#content").append("<div class='newData'>" + item + "</div>")
        ajaxLoading = false;
    })
}

yHandler()

window.onscroll = function (ev) {
    var yOffset = window.pageYOffset;
    var y = yOffset + window.innerHeight;
    var blockPosition = Math.floor($("#content").position().top) + document.getElementById('content').offsetHeight;
    if ((y >= blockPosition) && ajaxLoading === false) {
        ajaxLoading = true;
        yHandler()
    }
};

$(document).ready(function () {

    // $('.articles-media__item_shuffle').shuffle();

    $(".filter_news_item").on("click", function () {
        $(".result_block_mobile p").text($(this).text());
        $(".filter_news_item").removeClass("active");
        $(this).addClass("active");
        $(".filter_news").removeClass("open");
        $(".filter_news").addClass("close");
        $(".filter_news_arrow").removeClass("open");
        $(".filter_news_arrow").addClass("close");
    });

    var windowWidth = $(window).width();
    var body = document.getElementById('body');
    var trigger = false;
    var nightMode = localStorage.getItem('nightMode');

    if (nightMode === "true") {
        trigger = true;
        $('.switch input').prop('checked', true);
    } else {
        trigger = false;
    }

    function openList(btn, someBlockAnimation) {
        $("." + btn).on("click", function () {
            if (!$(this).hasClass("open")) {
                $("." + someBlockAnimation).removeClass("close");
                $("." + someBlockAnimation).addClass("open");
                $(this).addClass("open");
                $(this).removeClass("close");
            } else {
                $("." + someBlockAnimation).removeClass("open");
                $("." + someBlockAnimation).addClass("close");
                $(this).addClass("close");
                $(this).removeClass("open");
            }
        });
    }

    openList("filter_news_arrow", "filter_news");
    openList("icon_arrow", "currency-bar.mobile");
    openList("theme-icon_arrow", "theme-wrapper");


    //currency drop list

    $('.switch-box').click(function () {
        if (trigger === false) {
            trigger = true;
            localStorage.setItem('nightMode', "true");
            body.className += "night-mode";
        } else {
            trigger = false;
            body.classList.remove("night-mode");
            localStorage.setItem('nightMode', "false");
        }
    });

    $('.dropdown-toggle').click(function (e) {
        e.preventDefault();

        $('.dropdown').toggleClass('show');
        $('.dropdown-menu').toggleClass('show');
    });

    $('.js-toggle-menu').click(function () {
        $(this).toggleClass('open');
        $('.nav-list').slideToggle(300);
        $('.search-mobile, .social-mobile').slideToggle('fast');
    });

    // fixed menu on scroll
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        var headerHeight = $('header').height();

        if (scrollTop > 200) {
            $('header').addClass('fixed');
            $('.currency').addClass('dis');

        } else {
            $('header').removeClass('fixed');
            $('.currency').removeClass('dis');

        }
    });

    $('.nav-tabs__link').click(function (e) {
        e.preventDefault();
        var tabsLink = $(this).attr('data-url');

        $('.nav-tabs__link').removeClass('active');
        $(this).addClass('active');
        $('.tab-content__body').hide().removeClass('active');
        $('.tab-content').find('#' + tabsLink).fadeIn().addClass('active');
    });

    // clone last news block to body on mob devices
    if (windowWidth < 1130) {
        var lastNews = $('.last-news__desktop').html();
        $('.last-news__mobile').append(lastNews);
    }
    var tags_words = [
        {text: 'Криптовалюта', link: '/tags/Криптовалюта.html', weight: 10},
        {text: 'Биткоин (BTC)', link: '/tags/Биткоин (BTC).html', weight: 9},
        {text: 'блокчейн', link: '/tags/блокчейн.html', weight: 9},
        {text: 'Майнинг', link: '/tags/Майнинг.html', weight: 8},
        {text: 'ICO', link: '/tags/ICO.html', weight: 8},
        {text: 'США', link: '/tags/США.html', weight: 7},
        {text: 'Блокчейн', link: '/tags/Блокчейн.html', weight: 7},
        {text: 'Биржа', link: '/tags/Биржа.html', weight: 6},
        {text: 'Россия', link: '/tags/Россия.html', weight: 6},
        {text: 'Регулирование', link: '/tags/Регулирование.html', weight: 5},
        {text: 'биржи', link: '/tags/биржи.html', weight: 5},
        {text: 'Курс', link: '/tags/Курс.html', weight: 4},
        {text: 'Южная Корея', link: '/tags/Южная Корея.html', weight: 4},
        {text: 'Токены', link: '/tags/Токены.html', weight: 4},
        {text: 'банки', link: '/tags/банки.html', weight: 3},
        {text: 'Эфириум (ETH)', link: '/tags/Эфириум (ETH).html', weight: 3},
        {text: 'Инвестиции', link: '/tags/Инвестиции.html', weight: 2},
        {text: 'хакеры', link: '/tags/хакеры.html', weight: 2},
        {text: 'Ripple (XRP)', link: '/tags/Ripple (XRP).html', weight: 1},
        {text: 'Падение', link: '/tags/Падение.html', weight: 1}
    ];

    $('#tag-cloud').jQCloud(tags_words, {
        autoResize: true
    });

    // An array of dates
    var eventDates = {};
    eventDates[new Date('12/15/2017')] = new Date('12/15/2017');
    eventDates[new Date('12/20/2017')] = new Date('12/20/2017');

    if ($("#datepicker").length > 0) {
        $("#datepicker").datepicker({
            dateFormat: 'dd MM',
            showOtherMonths: true,
            selectOtherMonths: true,
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            beforeShowDay: function (date) {
                var highlight = eventDates[date];
                if (highlight) {
                    return [true, "special-date"];
                } else {
                    return [true, '', ''];
                }
            }
        });
    }
});

$(window).load(function () {

    $('.slider__preloader').hide();

    // gallery
    $('.gallery-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '.gallery-nav'

    });

    $('.gallery-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        speed: 200,
        fade: true,
        cssEase: 'linear'
    });
    $('.gallery-wrapper1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        speed: 200,
        fade: true,
        cssEase: 'linear'
    });

    $('.gallery-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.gallery-for',
        centerMode: true,
        focusOnSelect: true,
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

    $('.gallery').addClass('initialized');
    $('.gallery-block').css("opacity", "1");
});
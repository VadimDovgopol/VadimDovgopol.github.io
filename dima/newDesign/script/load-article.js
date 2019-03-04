let ajaxLoading = false;
let arrayUrl = [];


function yHandler() {
    $.getJSON(next_article_url, function (data) {
        let url = data.url;
        let item = data.item;
        $(".article-wrapper").append(item);
        ajaxLoading = false;
        setTimeout(function () {


            $('.slider__preloader').hide();

            $('.gallery-for').not('.slick-initialized').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                adaptiveHeight: true,
                asNavFor: '.gallery-nav'
            });

            $('.gallery-nav').not('.slick-initialized').slick({
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
            $('.gallery-block').css("opacity", "1");
            $('.rating').barrating({
                theme: 'css-stars'
            });

            $('.gallery').css("opacity", "1");
        }, 0)


        ga("set", "page", url);
        ga("send", "pageview");
        $('.social-likes').socialLikes();
    })
}


$(function () {

    $(window).scroll(function () {
        let scrollTop = $(document).scrollTop() + ($(window).height() / 2);
        let positions = [];

        $('.first-element-for-url').each(function () {
            $(this).removeClass("active");
            positions.push({position: $(this).position().top, element: $(this)});

        });

        let getClosest = closest(positions, scrollTop);
        if (arrayUrl[arrayUrl.length - 1] !== getClosest.data("value")) {
            arrayUrl.push(getClosest.data("value"));
            history.pushState(null, '', arrayUrl[arrayUrl.length - 1]);
        } else {
            return false;
        }
    });

    function closest(array, number) {
        let num = 0;
        for (let i = array.length - 1; i >= 0; i--) {
            if (Math.abs(number - array[i].position) < Math.abs(number - array[num].position)) {
                num = i;
            }
        }
        return array[num].element;
    }
});

window.onscroll = function (ev) {
    let yOffset = window.pageYOffset;
    let y = yOffset + window.innerHeight;
    let blockPosition = Math.floor($(".start-article").position().top) + document.getElementById('article-wrapper').offsetHeight;

    if ((y >= blockPosition) && ajaxLoading === false) {
        ajaxLoading = true;
        yHandler();
    }
};

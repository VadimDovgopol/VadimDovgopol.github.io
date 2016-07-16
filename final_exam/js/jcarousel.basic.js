(function($) {
    $(function() {
        $('.jcarousel').jcarousel();


        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);
//(function($) {
//    $(function(e) {
//         e.preventDefault();
//        var jcarousel = $('.jcarousel');
//
//        jcarousel.on('jcarousel:reload jcarousel:create', function () {
//                var carousel = $(this),
//                    width = carousel.innerWidth();
//
//                if (width >=300 ) {
//                    width = width / 3;
//                } else if (width >= 250) {
//                    width = width / 2;
//                }
//
//                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
//            })
//            .jcarousel({
//                wrap: 'circular'
//            });
//
//        $('.jcarousel-control-prev')
//            .jcarouselControl({
//                target: '-=1'
//            });
//
//        $('.jcarousel-control-next')
//            .jcarouselControl({
//                target: '+=1'
//            });
//
//        $('.jcarousel-pagination')
//            .on('jcarouselpagination:active', 'a', function() {
//                $(this).addClass('active');
//            })
//            .on('jcarouselpagination:inactive', 'a', function() {
//                $(this).removeClass('active');
//            })
////            .on('click', function(e) {
////                e.preventDefault();
////            })
//            .jcarouselPagination({
//                perPage: 1,
//                item: function(page) {
//                    return '<a href="#' + page + '">' + page + '</a>';
//                }
//            });
//    });
//})(jQuery);


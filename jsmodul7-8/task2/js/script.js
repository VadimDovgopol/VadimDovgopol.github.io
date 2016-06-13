$(document).ready(function () {
    var $input = $('input');

    $input.hover(function (e) {

        var $title = $(this).siblings('label');

        e.preventDefault();
        $title.toggle();
    });
});



$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );
});

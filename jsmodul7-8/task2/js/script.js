$(document).ready(function () {
    var $input = $('input');

    $input.hover(function (e) {

        var $title = $(this).siblings('label');

        e.preventDefault();
        $title.toggle();
    });
});

$(function () {
    var $button = $('.button');
    var $closeButton = $('.close');
    $button.on('click', function (e) {
        var $people = $('.people--five');
        e.preventDefault();
        $people.fadeToggle(300);
        $button.removeClass().addClass('close').text('Close');
    })

});

$(document).ready(function(){
    var $tabs = $('#tabs');
    $('.tabs-content > div').each(function(i){
        if ( i != 0 ) $(this).hide(0);
    });
    $tabs.on('click', '.tabs a', function(e){
        e.preventDefault();

        var $tabId = $(this).attr('href');

        $('.tabs a').removeClass();
        $(this).addClass('active');

        $('.tabs-content > div').hide(0);
        $($tabId).show();
    });
});

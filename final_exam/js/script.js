$(function(){
  var $button = $('.button');
$button.on('click', function(e){
    var $people = $('.people--five');
    e.preventDefault();
    $people.show(300);
    $button.removeClass().addClass('close').text('Close');
})



  });

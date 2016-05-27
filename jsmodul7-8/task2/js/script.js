//$(document).ready(function(){
//   var $title = $('[title]');
//    $title.hover(
//   function(){
//  $title = $(this).attr('title');
//    console.log($title);
//   })
//});
$(document).ready(function(){
    var a = 1;
    var $input = $('input');
   $input.mouseenter(function(e){
    var $title = $(this).siblings('label');
       e.preventDefault();
       $title.show();
   });
     $input.mouseleave(function(e){
    var $title = $(this).siblings('label');
       e.preventDefault();
       $title.hide();
   });

});

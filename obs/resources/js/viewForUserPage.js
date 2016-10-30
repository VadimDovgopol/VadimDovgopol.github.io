$(function(){
   
    var button = $('.userLogOut');
    var modal = $('.logOut');
    var outBtn = $('.logOutBtn')
    button.on('click', function(e){
        e.preventDefault();
        modal.slideToggle();
        
        
    });
    
    outBtn.on('click', function (){
        window.location.replace("index.html");
    })
});
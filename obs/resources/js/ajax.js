$(function (){
      $.ajax({
            url:'/user=1/photos',
            dataType : "json",
            success: function(data){
            console.log("data",data);
          
          
      }
      });
});
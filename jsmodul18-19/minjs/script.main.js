$(function(){
  $('#form').submit(function(e) {
    e.preventDefault();

var text = $('#search').val();

  $.ajax({
             url:'https://pixabay.com/api/?key=2714307-54c654f67ca3fd61019f64f4c&q= '+ text +' &image_type=photo',
             dataType : "jsonp",

             success: function(data){
              console.log("data",data);
              var ul = document.createElement("ul");
              $.each(data.hits, function(i, val){
              var li = document.createElement("li");

           var inner = '<img class="photo" src="' + val.webformatURL + '">'+ '<p><a href="'+ val.pageURL+'" title="'+val.pageURL+'" target="_blank">'+val.pageURL+'</a></p>';

          li.innerHTML = inner;
          ul.appendChild(li);
    });
    $('#results').html(ul);
    },
    });
  });
});

function Human() {
  this.name = "Vadim";
  this.age = 21;
  this.sex = "male";
  this.height = 178;
  this.weight = 56;
}

function Worker() {
  this.job = "slave";
  this.salary = 'хлеб';
  this.work = function () {
    alert("ратобай");
  }
}

function Student() {
  this.university = "НУХТ";
  this.grant = 1000;
  this.watchTVShows = function () {
    alert("сиотреть сериалы");
  }
}

Worker.prototype = new Human();
var newWorker = new Worker();

Student.prototype = new Human();
var newStudent = new Student();

console.log(newWorker.name);

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

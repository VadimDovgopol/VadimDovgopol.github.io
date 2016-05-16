var timer = document.getElementById('timer');
var buttonStart = document.getElementById('buttonStart');
var buttonClear = document.getElementById('buttonClear');
var watch = new Stopwatch(timer);

buttonStart.addEventListener('click', function(){
   if (watch.isOn) {
       watch.stop();
   } else {
       watch.start();
   }
});
buttonClear.addEventListener('click', function(){
    watch.reset();
});

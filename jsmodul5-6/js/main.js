var timer = document.getElementById('timer');
var buttonStart = document.getElementById('buttonStart');
var buttonClear = document.getElementById('buttonClear');
var watch = new Stopwatch(timer);

buttonStart.addEventListener('click', function(){

   if (watch.isOn) {
       watch.stop();
       buttonStart.textContent = 'Start';

   } else {

       watch.start();
       buttonStart.textContent = 'Pause';
   }
})

buttonClear.addEventListener('click', function(){

    watch.reset();

})


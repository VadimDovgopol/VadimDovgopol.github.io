var mills = document.getElementById("mills");
var seconds = document.getElementById("seconds");
var minuts = document.getElementById("minuts");
var hours = document.getElementById("hours");
var buttonStart = document.getElementById("buttonStart");
var buttonClear = document.getElementById("buttonClear");
var millsec = 0;
var sec = 0;
var min = 0;
var hour = 0;

var interval = null;

buttonClear.addEventListener('click', clear);
buttonStart.addEventListener('click', start);

function start() {
    buttonStart.innerHTML = 'Pause';

    interval = setInterval(millChanger, 1);

    function millChanger() {

        if (millsec === 999) {
            millsec = 0;
            seconds.innerHTML = ++sec;
        }
        if (sec === 59) {
            sec = 0;
            minuts.innerHTML = ++min;
        }
        if (min === 59) {
            min = 0;
            hours.innerHTML = ++hour;

        }
        if (hour === 23) {
            clearInterval(interval);
        }
        mills.innerHTML = millsec++;

    }
}

//function pause() {
 //   buttonStart.innerHTML = 'Start';
   // clearInterval(interval);
//}

function clear() {
    clearInterval(interval);
    millsec = 0;
    mills.innerHTML = 0;
    sec = 0;
    seconds.innerHTML = 0;
    min = 0;
    minuts.innerHTML = 0;
    hour = 0;
    hours.innerHTML = 0;
}
function full(){

}



const CYCLES_NUMBER = 3;

var divTask = [];
var divAnswer = [];
var input = [];
var label = [];
var h1Task = [];
var form = [];

var main = document.createElement('div');
var h1Test = document.createElement('h1');
var button = document.createElement('div');
var inputForButton = document.createElement('button');

document.body.appendChild(main);
main.className = 'main';
main.appendChild(h1Test);
h1Test.innerHTML = 'Тест по программированию';
h1Test.className = 'centerSet';

for (var i = 0; i < CYCLES_NUMBER; i++) {
    divTask[i] = document.createElement('div');
    h1Task[i] = document.createElement('h1');
    form[i] = document.createElement('form');

    main.appendChild(divTask[i]);
    divTask[i].className = 'task' + (i + 1);
    divTask[i].appendChild(h1Task[i]);
    h1Task[i].innerHTML = (i + 1)  + '. Вопрос №' + (i + 1);
    divTask[i].appendChild(form[i]);

    for (var j = 0; j < CYCLES_NUMBER; j++) {
        divAnswer[j] = document.createElement('div');
        input[j] = document.createElement('input');
        label[j] = document.createElement('label');

        form[i].appendChild(divAnswer[j]);
        divAnswer[j].className = 'answer' + (j + 1);
        divAnswer[j].appendChild(input[j]);
        input[j].type = 'checkbox';
        divAnswer[j].appendChild(label[j]);
        label[j].innerHTML = 'Вариант ответа №' + (j + 1);
    }
}
main.appendChild(button);
button.appendChild(inputForButton);
button.className = 'button';
inputForButton.type = 'button';
inputForButton.innerHTML ='Проверить мои результаты';



//h1.innerHTML
"use strict";

var obj = {

header: "Тест по программированию",

questions:[
     {title:"Вопрос №1",
      name: "radioName",
      id:["1","2","3"],
      answers:["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
      correct:2
      },
     {title:"Вопрос №2",
      name: "radioName1",
     id:["4 ","5","6"],
      answers:["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
      correct:5
      },
      {title:"Вопрос №3",
      name: "radioName2",
      id:["7","8","9"],
      answers:["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
      correct:8
      }
      ]
      };

let sObj = JSON.stringify(obj);
localStorage.setItem("object", sObj);

let retObj = JSON.parse(localStorage.getItem("object"));
let html = $('#test').html();
let content = tmpl(html,retObj);
$("body").append(content);

function showModal(e){
     e.preventDefault();
     let modal = $("<div class='modal'></div>");
     let result = 0;
     let answer = $('input:checked');
     let correct = [];
     for (let i=0; i<retObj.questions.length;i++){
          correct[i] = retObj.questions[i].correct;
          if($(answer[i]).attr('id')==correct[i]){
               result+=1;
               modal.append('<p class="correct">Ответ на '+ (i+1)+'вопрос правильный</p>');
     } else {
          modal.append('<p class="incorrect">Ответ на ' + (i+1) + 'вопрос неправильный</p>');
     }
}
modal.append('<button>Попробовать снова</button>');
$('body').append(modal);

$('button').one('click',function(e){
     e.preventDefault();
     modal.detach();
     $('input').attr('checked', false);
})
}
$('button').on('click',showModal);

var arr = [];
for (var i = 0; i < 5; i++) {
    arr[i] = prompt('enter name:', 0);
    console.log(arr[i]);
}
var name = prompt('Введите имя:', 0);
var isFind = false;
for ( var i= 0; i < arr.length; i++){
    if (name === arr[i]){
        isFind = true;
        break;
    }
}
if(isFind) {
    alert('Добро пожаловать,' + name);
} else {
    alert('Пользователь не найден');
}
    
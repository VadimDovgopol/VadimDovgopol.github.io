var firstNumber = prompt('enter firstNumber:', 0);
var secondNumber = prompt('enter secondNumber:', 0);
console.log(pow(firstNumber, secondNumber));

function pow(a, b) {
    
    if (b < 0) {
        return 1 / simplePow(a, Math.abs(b));
    }

    return simplePow(a, b);
}

function simplePow(a, b) {
    var result = 1;
    
    for (var i = 0; i < b; i++) {
        result *= a; 
    }
    return result;
}


//общая формула степени
//function megaPow(a, b) {
//    return Math.exp(b *  Math.log(a));
//}



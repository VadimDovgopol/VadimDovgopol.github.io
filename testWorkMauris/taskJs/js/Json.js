/* Subject */
function IMath() {
    this.add = function (x, y) {
    };
    this.sub = function (x, y) {
    };
}

/* Real Subject */
function RMath() {
    /*
     IMath.call(this); // агрегируем IMath, т.к. нативного наследования нет
     // этот вариант следует использовать вместо прототипирования,
     // если в IMath имеются приватные переменные,
     // которые могут быть доступны через геттеры в IMath
     */
    this.add = function (x, y) {
        return x + y;
    };
    this.sub = function (x, y) {
        return x - y;
    };
}
RMath.prototype = new IMath();
RMath.prototype.constructor = RMath;

/* Proxy */
function MathProxy() {
    var math = new RMath();

    this.add = function (x, y) {
        return math.add(x, y);
    };
    this.sub = function (x, y) {
        return math.sub(x, y);
    };
}

var test = new MathProxy();
alert(test.add(3, 2)); // 5
alert(test.sub(3, 2)); // 1
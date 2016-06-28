var app = {

pow:function (a, b) {

    if (b < 0) {
        return 1 / app.simplePow(a, Math.abs(b));
    }

    return app.simplePow(a, b);
},

simplePow:function (a, b) {
    var result = 1;

    for (var i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
 }

module.exports = app;

var app= require('../js/app.js', app);

describe("A suite", function() {
  it("pow", function() {
    var result = app.pow(2, 2);
    expect(4).toBe(result);
  });
});

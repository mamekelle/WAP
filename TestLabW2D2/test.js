/*jshint esversion: 6  */
describe("Functional operation on array", function () {
    let calculator = null;
    beforeEach(function () {
        calculator = new testData();
    });
    describe("Operations", function () {
        it("the sum of the array is 15", function () {
            assert.equal(calculator.sum([3,1,3,3,5]), 15);
        });
        it("the input for the sum of the array should be array", function () {
            assert.equal(calculator.sum("hello"), "Input should be an array");
        });
        it("the multiplication each element by 10", function() {
            assert.equal(calculator.multiplyByTen([1, 3, 5, 3, 3])[0], 10);
        });
        it("the multiplication each element", function() {
            assert.equal(calculator.multiply([1, 3, 5, 3, 3]), 135);
        });
        it("the filtered elements return only 3", function() {
            assert.equal(calculator.filter([1,1,3,3,5])[0], 3);
        });
        it("the reversed string", function() {
            assert.equal(calculator.reverseWord("hello"), "olleh");
        });
    });

});

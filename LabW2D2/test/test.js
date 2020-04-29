/*jshint esversion: 6  */

(function() {
    "use strict";
    const a = [1, 3, 5, 3, 3];
    let calculator = {

        sum() {
            return a.reduce((accum,elem) => elem + accum,0);
        },

        multiplyByTen() {
            return a.map(elem => elem * 10);
        },
        multiply(){
            return a.reduce((accum,elem) => elem * accum,1);
        },
        filter(){
            return a.filter(elem => elem === 3);
        },
        reverseWord(b){
            return b.split("").reduce((accum,elem) => elem + accum,"");
        }

    };

    describe("Functional operation on array", function() {
        context("Operations", function() {
            it("the sum of the array is 15", function() {
                assert.equal(calculator.sum(), 15);
            });
            it("the multiplication each element by 10", function() {
                assert.equal(calculator.multiplyByTen()[0], 10);
            });
            it("the multiplication each element", function() {
                assert.equal(calculator.multiply(), 135);
            });
            it("the filtered elements return only 3", function() {
                assert.equal(calculator.filter()[0], 3);
            });
            it("the reversed string", function() {
                assert.equal(calculator.reverseWord("hello"), "olleh");
            });
        });

    });
}());
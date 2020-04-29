/*jshint esversion: 6  */

(function() {
    "use strict";

    const a = [1, 3, 5, 3, 3];
    let calculator = {

        sum() {
            return a.reduce((accum,elem) => elem + accum);
        },

        mul() {
            return a.map(elem => elem * 10);
        },
        filter(){
            return a.filter(elem => elem === 3);
        }

    };

    describe("Functional operation on array", function() {

        context("Operations", function() {
            it("the sum of the array is 15", function() {
                assert.equal(calculator.sum(), 15);
            });
            it("the multiplication each element by 10", function() {
                assert.equal(calculator.mul()[0], 10);
            });
            it("the filtered elements return only 3", function() {
                assert.equal(calculator.filter()[0], 3);
            });
        });

    });


}());
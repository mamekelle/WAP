/*jshint esversion: 6  */
if (!window.testData) {
    window.testData = function () {
        this.sum = function (a) {
            if (a instanceof Array) {
                return a.reduce((accum, elem) => elem + accum, 0);
            } else {
                return "Input should be an array";
            }
        }
        this.multiplyByTen = function (a) {
            if (a instanceof Array) {
                return a.map(elem => elem * 10);
            } else {
                return "Input should be an array";
            }
        }

        this.multiply = function (a) {
            if (a instanceof Array) {
                return a.reduce((accum, elem) => elem * accum, 1);
            } else {
                return "Input should be an array";
            }
        }

        this.filter = function (a) {
            if (a instanceof Array) {
                return a.filter(elem => elem === 3);
            } else {
                return "Input should be an array";
            }
        }

        this.reverseWord = function (a) {
                return a.split("").reduce((accum, elem) => elem + accum, "");
        }
    }
}


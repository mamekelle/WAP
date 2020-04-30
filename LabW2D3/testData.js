/*jshint esversion: 6  */
if (!window.testData) {
    window.testData = function () {
        this.reverseArray = function (a) {
            return a.map((val, index) => a[a.length - 1 - index]);
        }
        this.reverseArrayInPlace = function (a) {
            for (let i = 0; i <= (a.length / 2); ++i) {
                const start = a[i];
                a[i] = a[a.length - 1 - i];
                a[a.length - 1 - i] = start;
            }
            return a;
        }
        this.arrayToList = function (a) {
            let list = null;
            for (let i = a.length - 1; i >= 0; --i) {
                list = {
                    value: a[i],
                    rest: list
                }
            }

            return list;
        }
        this.listToArray = function (a) {
            let listToArray = [];
            for (let item = a; item; item = item.rest) {
                listToArray.push(item.value);
            }
            return listToArray;
        }

        this.prepend = function (elem, inputList) {
            let list = null;
            list = {
                value: elem,
                rest: inputList
            }
            return list;
        }
        this.nth = function (inputList, index) {
            let count = 0;
            for (let item = inputList; item; item = item.rest) {
                if (count === index) {
                    return item.value;
                }
                count++;
            }
        }
        this.deepEqual = function (x, y) {
            if (x === y) {
                return true;
            }
            if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
                for (const key in x) {
                    if (!(key in y)) return false;
                    if (!this.deepEqual(x[key], y[key])) return false;
                }
            } else
                return false;
            return true;
        }

    }
}


/*jshint esversion: 6  */
describe("Functional operation on array", function () {
    let calculator = null;
    let list1=null;
    let list2=null;

    beforeEach(function () {
        calculator = new testData();
        list1 = {   value: 1,   rest: {     value: 2,     rest: {       value: 3,       rest: null     }   } }
        list2 = {   value: 1,   rest: {     value: 2,     rest: {       value: 4,       rest: null     }   } }

    });
    describe("Operations", function () {
        it("should reverse the array ", function () {
            assert.equal(calculator.reverseArray([3,1,3,3,5])[0], 5);
        });
        it("should reverse the array using in-place ", function () {
            assert.equal(calculator.reverseArrayInPlace([3,1,3,3,5,6])[0], 6);
        });
        it("should convert the array in to list ", function () {
            assert.equal(calculator.arrayToList([3,1,3,3,5]).value, 3);
        });
        it("should convert the list in to array ", function () {
            assert.equal(calculator.listToArray(list1)[0], 1);
        });
        it("should prepend the given element to the list", function () {
            assert.equal(calculator.prepend(10,list1).value, 10);
        });
        it("should return the given indexes element from the list", function () {
            assert.equal(calculator.nth(list1,1), 2);
        });
        it("should return true for deepEqual", function () {
            assert.equal(calculator.deepEqual(list1,list1), true);
        });
        it("should return false for deepEqual", function () {
            assert.equal(calculator.deepEqual(list1,list2), false);
        });

    });

});

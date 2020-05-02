/*jshint esversion: 6  */
describe("Functional operation on array", function () {
    let calculator = null;
    let person = null;
    let student = null;
    let teacher = null;
    beforeEach(function () {
        calculator = new testData();
        student= new Student();
        person= new Person();
        teacher= new Teacher();

        student.initialize("Mohammed",30);
        person.initialize("Mr",0);
        teacher.initialize("Levi",60);

        student.learn("Inheritance");
        teacher.teach("WAP");

    });
    describe("Operations", function () {
        it("String filter banned words", function () {
            assert.equal("I am not smart".filter("not"), "I am smart");
        });
        it("Bubble sort algorithm on Array object", function () {
            assert.equal([3,1,3,3,5].bubbleSort()[0], 1);
        });
        it("should describe the teacher", function () {
            assert.equal(teacher.describe(), "Levi, 60 years old.");
        });
        it("should describe the student", function () {
            assert.equal(student.describe(), "Mohammed, 30 years old.");
        });
        it("should describe the person", function () {
            assert.equal(person.describe(), "Mr, 0 years old.");
        });
    });

});

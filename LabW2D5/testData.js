/*jshint esversion: 6  */
if (!window.testData) {
    Person = function () {
    };

    Person.prototype.initialize = function(name, age)
    {
        this.name = name;
        this.age = age;
    }

    Person.prototype.describe = function () {
        return this.name + ", " + this.age + " years old.";
    }

    Student = function () {
    };
    Student.prototype = new Person();
    Student.prototype.learn = function (subject) {
        console.log(this.name + " just learned " + subject);
    }
    Teacher = function () {
    };
    Teacher.prototype = new Person();
    Teacher.prototype.teach = function (subject) {
        console.log(this.name + " is now teaching " + subject);
    }
    window.testData = function () {

        String.prototype.filter = function (banned) {
            return this.split(" ").filter(s => s !== banned).join(" ");
        }

        Array.prototype.bubbleSort = function () {
            let length = this.length;
            for (let i = (length - 1); i >= 0; i--) {
                for (let j = (length - i); j > 0; j--) {
                    if (this[j] < this[j - 1]) {
                        let temp = this[j];
                        this[j] = this[j - 1];
                        this[j - 1] = temp;
                    }
                }
            }
            return this;
        }
    }
}


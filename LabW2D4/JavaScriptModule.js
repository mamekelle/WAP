// Q6 and Q7 the free variable is counter inside add and reset method
// free variable is a variable declared outside of the inner methods and used by the inner methods.
(function () {
    let counter = 0;

    function add() {
        return counter += 1;
    }

    function reset() {
        return counter = 0;
    }

    function make_adder(n) {
        return counter += n;
    }

    add();
    add();
    make_adder(5);
    console.log(counter);
    reset();
    console.log(counter);
})();

var address;
const employee = (function () {
    let name = "";
    let age = 0;
    let salary = 0;

    function getName() {
        return name;
    }

    function getAge() {
        return age;
    }

    function getSalary() {
        return salary;
    }

    return {
        setName: function (inputName) {
            return name = inputName;
        },
        setAge: function (inputAge) {
            return age = inputAge;
        },
        setSalary: function (inputSalary) {
            return salary = inputSalary;
        },
        increaseSalary: function (salaryIncrease) {
            return getSalary() + salaryIncrease;
        },
        incrementAge: function (ageIncrement) {
            return getAge() + ageIncrement;
        }
    }
})();

employee.extension = (function () {
    return {
        setAddress: function (newAddress) {
            return address = newAddress;
        },
        getAddress: function () {
            return address;
        }
    }
})();

console.log(employee.increaseSalary(200));
console.log(employee.incrementAge(20));
console.log(employee.extension.setAddress("Fairfield"));
console.log(employee.extension.getAddress());


let animal = {
    eats: true,
    walk: function () {
        alert("Animal walk!")
    }
};
let rabbit = {sleeps: true, __proto__: animal};
let longEar = {earLength: 10};
longEar.__proto__ = rabbit;
longEar.walk = function () {
    //  alert("Long ear owns walk! no chain");
}
rabbit.__proto__ = animal;

//alert("A "+rabbit.eats);
console.log("B " + rabbit.sleeps);
rabbit.walk();
console.log("C " + longEar.eats);
longEar.walk();
(function () {
    "use strict";

    function Employee(id) {
        this.name = "DEFAULT";
        this.employer = {
            name: "MIU"
        };
        this.id = id;
    }

    Employee.prototype.getName = function () {
        return this.name;
    };

    Employee.prototype.getEmployerName = function () {
        return this.employer.name;
    }


    let john = new Employee(980000);
    console.log("John A: " + john.getName());
    console.log("John B: " + john.getEmployerName());


})();




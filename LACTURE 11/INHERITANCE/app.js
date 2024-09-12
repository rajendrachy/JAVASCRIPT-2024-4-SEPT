// 1. CLASS

// class Parent { // Parent is a class
//     hello () { // hello is a function
//         console.log("hello !");
//     }
// }

// class Child extends Parent {}

// let obj = new Child();
// console.log(obj.hello()) // hello




// 2. CLASS

class Person {

    constructor () {
        this.species = "homo sapiens";
    }

   eat () {
    console.log("eat");
   }

   sleep () {
    console.log("sleep");
   }

   work () {
    console.log("Do nothing : ");
   }
}
// if the Parent class and child class has the same function then child class function is invoke
// this is METHOD OVERRIDING



class Engineer extends Person{
    work () {
        console.log(" solve problem, work smart to get a better life");
    }
}


// if the Parent class and child class has the same function then child class function is invoke
// this is METHOD OVERRIDING
class Doctor extends Person{
    work () {
        console.log("Treate Patients: ");
    }
}


let p1 = new Person();
//console.log(Person);

let e1 = new Engineer();

let rajObj = new Engineer();
console.log(rajObj);
console.log(rajObj.work());
console.log(rajObj.eat()); // solve problem, work smart to get a better life
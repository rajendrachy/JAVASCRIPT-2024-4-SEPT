

class Person {

    constructor () {
        console.log("Enter a parent constructor : ");

        this.species = "homo sapiens";
    }

   eat () {
    console.log("eat");
   }
}
// if the Parent class and child class has the same function then child class function is invoke
// this is METHOD OVERRIDING



class Engineer extends Person{

    constructor(branch) {
        console.log("Enter a child constructor : ");
        super(); // to invoke the parent class constructor
        this.branch = branch;
        console.log("Exits child constructor : ");

    }
    work () {
        console.log(" solve problem, work smart to get a better life");
    }
}




let engObj =
 new Engineer("chemical engin");
console.log(engObj);
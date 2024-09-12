// const student = { //# object
// fullName : "Rajendra Chaudhary",
// marks: 94.4,
// printMarks: function () {
//     console.log("marks = ", this.marks);
// },

// };
// console.log(student) // prototype => object
// console.log(student.fullName);
// console.log(student.marks)
// console.log(student.printMarks())





// let arr = ['apple', 'mango', 'banana']
// console.log(typeof(arr)); // obj
// console.log(arr);
// arr.push('litchi'); // add element
// console.log(arr);




// object creating

const employee = {
    calcTax1 () {
        console.log("tax rate is 10 %"); // calTax1 & calTax2 is a two smae mathod of the creating a function or a define a function

    },
    // calTax2 : function () {
    //     console.log("tax rate is 10%");
    // }
};
console.log(employee.calcTax1());




// new manber arrise

const karanArjun = {
     salary: 50000,
     calcTax1() {
        console.log("tax rate is 20%");
     }


};


const karanArjun2 = {
    salary: 50000,



};

const karanArjun3 = {
    salary: 50000,


};

const karanArjun4 = {
    salary: 50000,


};

const karanArjun5 = {
    salary: 50000,


};


karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;
karanArjun5.__proto__ = employee;

console.log(karanArjun);
console.log(karanArjun3)
console.log(karanArjun3.calcTax1())

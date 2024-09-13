// console.log("one");
// console.log("two");
// console.log("three");

// 1.
// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 2000) // time out in the milli second 2second = 2000 millisccond
// //setTimeout is a function

// or 

// 2. alternative of 1

console.log("one"); // not affected by the setTime
console.log("two");


setTimeout( () => {
   console.log("hello");
}, 2000); //  2second = 2000 millisccond

console.log("three"); // not affected by the setTime 
console.log("four"); // not affected by setTime ( this is a Asynchronous)
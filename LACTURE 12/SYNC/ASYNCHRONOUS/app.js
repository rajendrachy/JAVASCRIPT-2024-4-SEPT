console.log("one"); // not affected by the setTime
console.log("two");


setTimeout( () => {
   console.log("hello");
}, 2000); //  2second = 2000 millisccond

console.log("three"); // not affected by the setTime 
console.log("four"); // not affected by setTime ( this is a Asynchronous)
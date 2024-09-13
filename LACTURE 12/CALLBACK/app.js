// // call back function
// function sum (a, b) {
//     console.log(a+b);
// }

// function calculator (a, b, sumCallback) { //// this is a call back 
//   sumCallback(a,b);

// }

// calculator(1,2,sum); // this is a call back 
// //                      call bace is not using a () -->> sum()--> not this 





// Arrow function 

const hello = () => {
   console.log("hello");
}

setTimeout(hello, 3000);
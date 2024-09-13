// const getPromise = () => {
//     return new Promise((resolve, reject)=> {
       
//       console.log("I am promise");
//       //resolve("success");
//       reject("error");
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// });

// promise.catch (() => {
//     console.log("rejected");
// });







// ------------------promise chaining-------------------------------

// function asycfunction () { // timeOut is a async - function
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
// console.log("some data 1")
//   resolve("success");
//         }, 2000);
//     });
// };



// console.log("featching dada");
// let p1 = asycfunction();
// p1.then((res) => {
//     console.log(res);
// });







//2.


function asycfunction () { // timeOut is a async - function
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
console.log("some data 1")
  resolve("success");
        }, 4000);
    });
};

function asycfunction2 () { // timeOut is a async - function
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
console.log("some data 2")
  resolve("success");
        }, 4000);
    });
};

// without promise chaining-------------------
// console.log("featching dada 1");
// let p1 = asycfunction();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data 2.......");
//     let p2 = asycfunction();
//     p2.then((res) => {
//         console.log(res);
//     })
// });








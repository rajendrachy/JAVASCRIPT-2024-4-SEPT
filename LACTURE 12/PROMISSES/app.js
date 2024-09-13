

// .................resolve and reject are two handlers in the javascript ..............

// let promis = new Promise ((resolve, reject) => {
//     console.log("I an a promise");
//     //resolve () // it is a function in the js
//     //resolve("success");

//     reject("some error occured");
// });
// console.log(promis);   // print with using a resolve function and without usibng a that function




function getData(dataId, getNextData) {
      return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("data", dataId);
             resolve("success");
            if(getNextData) {
                getNextData();
            }
        }, 5000);

      });
};

let result = getData(123);
console.log(result);
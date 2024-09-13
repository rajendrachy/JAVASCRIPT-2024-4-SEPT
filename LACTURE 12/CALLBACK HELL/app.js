//nasting

// let age  = 19;
// if(age >= 18) {
//    if(age >=60) {
//     console.log("senior");
//    } else {
//     console.log("middle");
//    }
// } else {
//     console.log("child");
// }



// //nasting loop

// for(let i=0; i<5; i++) {
//     let str = "";
//     for(let j=0; j<5; j++) {
//         str = str + j;
      
//     }
//     console.log(i, str);
// }






// function getData(dataId) {
//     console.log("data", dataId);
// }
// getData(123);




function getData(dataId, getNextData) {
    //2s
    setTimeout(() => {
        console.log("data", dataId);

        if(getNextData) {
            getNextData();
        }
    }, 2000);  
}

//callback hell 
getData(1, ()=>{
    console.log("getting data 2.....");
    getData(2, () => {
        console.log("getting data 3.....");

        getData(3);
    }) ;
}); 


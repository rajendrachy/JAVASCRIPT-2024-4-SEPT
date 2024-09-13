// 1. // async function hello() {
//     console.log("hello");
// }

// 2.
function api() {
    return new Promise (() => {
        setTimeout(() => {
            console.log("weather");
        resolve(200);
        }, 2000);
    });
};

// call the getWeatherData in the console

// 2
// async function getWeatherData() {
//   await api(); // 1st call
//   await api(); // 2st call

// }












// 3.
function getData(dataId) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
};

// 3. Async-await
// async function getAllData() {
//     console.log("getting data1........");
//     await getData(1);
//     console.log("getting data2........");
//     await getData(2);
// }

async function getAllData() {
    console.log("getting data1........");
    await getData(1);
    console.log("getting data2........");
    await getData(2);
}


// Call the async function
getAllData();
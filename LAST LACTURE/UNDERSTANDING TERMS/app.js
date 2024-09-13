// const URL = "https://cat-fact.herokuapp.com/facts";

//  const getFacts = async () => {
//     console.log("getting data ...........");
//     let response = await fetch (URL); // response is a object
//     console.log(response); // JSON fromate -->> JSON method is async method & return the promise
//     //console.log(response.status);

//    let data = await response.json(); // json() returns the second data so we can use await ( AWAIT)
//   console.log(data);

//  } 
//step : 
 //after wtting this 
 // call in the console
 // 1. getFacts();


// // 2 --> add paragraph
//  const URL = "https://cat-fact.herokuapp.com/facts";
//  let factPara = document.querySelector("#fact");

//  const getFacts = async () => {
//     console.log("getting data ...........");
//     let response = await fetch (URL); // response is a object
//     console.log(response); // JSON fromate -->> JSON method is async method & return the promise
//     //console.log(response.status);

//    let data = await response.json(); // json() returns the second data so we can use await ( AWAIT)
//   console.log(data);
//   factPara.innerText = data[0].text;

//  } 
//  console.log(getFacts());



//button ----------------

// 2 --> add paragraph
const URL = "https://cat-fact.herokuapp.com/facts";
let factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


// const getFacts = async () => {
//    console.log("getting data ...........");
//    let response = await fetch (URL); // response is a object
//    console.log(response); // JSON fromate -->> JSON method is async method & return the promise
//    //console.log(response.status);

//   let data = await response.json(); // json() returns the second data so we can use await ( AWAIT)
//  console.log(data);
//  factPara.innerText = data[1].text;

// } 


// or, -->>> Using a promise chainging

function getFacts() {
    fetch(URL)
    .then((response) => {
       return response.json();
    }).then((data) => {
        console.log(data);
        factPara.innerText = data[2].text;
    });
};
btn.addEventListener("click", getFacts);


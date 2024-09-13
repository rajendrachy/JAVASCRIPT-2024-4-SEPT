// const URL = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(URL);
// console.log(promise);
//  // statue = 200 -->> means  successful request

const URL = "https://cat-fact.herokuapp.com/facts";

 const getFacts = async () => {
    console.log("getting data ...........");
    let response = await fetch (URL); // response is a object
    // console.log(response); // JSON fromate -->> JSON method is async method & return the promise
    console.log(response.status);

 }  // it is get request api

 getFacts();
// handle by inline and the javascript -->>>
// -->> the first proprity is javascript not inline handling



// onclick
let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);

};


//ondblclick

let btn2 = document.querySelector("#btn2");

btn2.ondblclick = () => {
 console.log("btn-2 was clicked by Rajendra chaudhary.");
 let a = 29;
 a++;
 console.log(a); // 26
};




//div -- > onmouseover
let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);

};
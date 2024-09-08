

// 1.  events listener -> addEventListener

// let btn1 = document.querySelector("#btn1");
// //....events handler....

// btn1.addEventListener("click", (e) => {
//  console.log("Button was clicked!");
//  console.log(e);
//  console.log(e.type);
// });



// btn1.addEventListener("click", () => {
//     console.log("Button was clicked! - handler 2");
//    });
   




// 2. events listner -> removeEventLstener

let btn1 = document.querySelector("#btn1");
//....events handler....

btn1.addEventListener("click", (e) => {
 console.log("Button was clicked! handler 1");
 console.log(e);
 console.log(e.type);
});



btn1.addEventListener("click", () => {
    console.log("Button was clicked! - handler 2");
   });
   

//    btn1.addEventListener("click", () => {
//     console.log("Button was clicked! - handler 3");
//    });

const handler3 = () => {
    console.log("Button was clicked! - handler 3");

}
btn1.addEventListener("click", handler3);
   

   btn1.addEventListener("click", () => {
    console.log("Button was clicked! - handler 4");
   });
   

   //suppose we have to remove handelet 3
     // event handler  -->>>
    btn1.removeEventListener("click", handler3);
let modeBtn = document.querySelector("#mode");
let currentmode = "Light"; //dark
modeBtn.addEventListener("click", () => {
    // console.log("You are trying to change mode");

    if(currentmode === "Light") {
        currentmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("p").style.color = "white";

        
    } else {
        currentmode = "Light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("p").style.color = "black";


    }

    console.log(currentmode);
});
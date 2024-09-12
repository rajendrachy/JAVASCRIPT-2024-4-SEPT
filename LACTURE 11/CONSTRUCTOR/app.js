class ToytaCar {

    constructor () {
      console.log("Creating new obj");
    }

    start() {
     console.log("start");
    }
 
    stop() {
     console.log("stop");
    }
 
 
    setBrand(brand) {
     this.brandName = brand; // this.brand is obj property
                             // brand is a argument of the setBrand
    }
 }
 
 
 //1.  creating a OBJ
   let fortuner = new ToytaCar (); // constructor invoke
   console.log(fortuner);

   let lexus = new ToytaCar (); // constructor invoke
   console.log(lexus);

 

 //2.  creating a OBJ

//  let fortuner = new ToytaCar (); // new -->> keyword  which create an new OBJ through classes 
//  console.log(fortuner);
//  fortuner.setBrand("fortuner");
//  console.log(fortuner)
//  console.log(typeof(fortuner)); // OBJECT
var a = "true";
var b = true;
console.log(a==b);



//  String vs. Boolean: In your case, a is a string ("true"), ->>
//  and b is a boolean (true). JavaScript does not automatically ->>  
//  convert a string to a boolean in a way that would result in the string "true" being considered equal to the boolean true.


// Coercion Rules: When comparing a string to a boolean with ==, JavaScript first converts
//  the boolean to a number. In this case:



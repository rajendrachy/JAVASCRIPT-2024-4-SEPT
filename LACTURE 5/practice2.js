//we are giveb array of the marks of student . filter out the marks of student that scored 90+

let arr = [67, 80, 99, 100, 105];

let newArray = arr.filter((val) => {
    return val > 90;
});

console.log(newArray);
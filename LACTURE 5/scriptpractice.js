function countVowels (str) {
    let coutn = 0;
    for(const char of str) {
       if(
        char === "a" || 
        char === "e" || 
        char === "i" || 
        char === "o" || 
        char === "u") 
        {
        coutn++;
       }
    }
    return count;
}
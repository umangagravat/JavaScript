// 44. Write a JavaScript function to test whether the character at the given (character) index is lower case.
// Test Data :
// console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
// true

function isLowerCaseAt(str, num){
    return(str.charAt(num) === str.charAt(num).toLowerCase()) ? true : false ;
}
console.log(isLowerCaseAt('Js STRING EXERCISES', 1));
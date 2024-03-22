// 43. Write a JavaScript function to test whether the character at the index provided is upper case.
// Test Data :
// console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
// false

function isUpperCaseAt(str, num) {
    return(str.charAt(num) === str.charAt(num).toUpperCase()) ? true : false;
};
console.log(isUpperCaseAt('Js STRING EXERCISES', 5));
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
// 2. Write a JavaScript function to check whether a string is blank or not.

// Test Data :
// console.log(is_Blank(''));
// true

// console.log(is_Blank('abc'));
// false

console.log("2. Write a JavaScript function to check whether a string is blank or not.")
const isBlank = function(value) {
    if (typeof(value) === 'string' && (value).trim() == '') {
        return true;
    }
    else{
        return false;
    }    
}
console.log(isBlank('abc'));
console.log(isBlank(' '));

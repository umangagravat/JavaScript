// 4. Write a JavaScript function to extract a specified number of characters from a string.

// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

console.log("4. Write a JavaScript function to extract a specified number of characters from a string.")
const truncate_string = function(value){
    return value.slice(value,4);
}
console.log(truncate_string("umang agravat", 4));

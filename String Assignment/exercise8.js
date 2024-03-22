// 8. Write a JavaScript function to capitalize the first letter of a string.

// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

console.log("8. Write a JavaScript function to capitalize the first letter of a string.");
const capitalize = function (args){
    return args.charAt(0).toUpperCase() + args.substr(1).toLowerCase();
}
console.log(capitalize("js string exercises"))
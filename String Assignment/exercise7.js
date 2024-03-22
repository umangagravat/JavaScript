// 7. Write a JavaScript function to parameterize a string.

// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

console.log("7. Write a JavaScript function to parameterize a string.")
const string_parameterize = function (args){
    let parameterizeArr = args.split(" ");
    return parameterizeArr.join("-").toLowerCase();
}
console.log(string_parameterize("Robin Singh from USA"))

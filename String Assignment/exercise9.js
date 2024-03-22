// 9. Write a JavaScript function to capitalize the first letter of each word in a string.

// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

console.log("9. Write a JavaScript function to capitalize the first letter of each word in a string.");
//capitalize_Words 
function capitalize_Words(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
console.log(capitalize_Words('js string exercises'));

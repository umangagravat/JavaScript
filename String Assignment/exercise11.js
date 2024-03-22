// 11. Write a JavaScript function to convert a string into camel case.
// Test Data :
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"


console.log(" 11. Write a JavaScript function to convert a string into camel case.");

function camelCase(input) {
    input = input.split(" ");
    input = input.map(function (value, index, array) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    });
    return input.join("");
}
console.log(camelCase("JavaScript Exercises"));
console.log(camelCase("JavaScript exercises"));
console.log(camelCase("JavaScriptExercises"));

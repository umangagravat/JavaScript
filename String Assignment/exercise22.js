// 22. Write a JavaScript function to get a part of a string after a specified character.
// Test Data :
// console.log(char('w3resource: JavaScript Exercises', ':','a'));
// console.log(char('w3resource: JavaScript Exercises', 'E','b'));
// Output :
// "w3resource"
// "xercises"


function char(str, char, pos) {
    if (pos == 'b')
        return str.substring(str.indexOf(char) + 1);
    else if (pos == 'a')
        return str.substring(0, str.indexOf(char));
    else
        return str;
}
console.log(char('w3resource: JavaScript Exercises', ':', 'a'));

console.log(char('w3resource: JavaScript Exercises', 'E', 'b'));
// 12. Write a JavaScript function to uncommelize a string.
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"

console.log("12. Write a JavaScript function to uncommelize a string.");
function uncamelize(str, sep) {
    return str.split('').map((char, index, array) => {
        if (char == char.toUpperCase() && (sep == undefined)) {
            return str.slice(0, str.indexOf(char)) + ' ' + str.slice(str.indexOf(char))
        }
        if (char == char.toUpperCase()) {
            return str.slice(0, str.indexOf(char)) + sep + str.slice(str.indexOf(char))
        }
    }).join('');
}
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld', '-'));
console.log(uncamelize('helloWorld', '_'));

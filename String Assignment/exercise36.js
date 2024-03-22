// 36. Write a JavaScript function to create a zero-filled value with an optional +, - sign.
// Test Data :
// console.log(zeroFill(120, 5, '-'));
// "+00120"
// console.log(zeroFill(29, 4));
// "0029"


function zeroFill(n1, n2, n3) {
    return '0'.repeat(n2 - n1.toString().length) + n1;
};
console.log(zeroFill(120, 5, '-'));
console.log(zeroFill(29, 4,));
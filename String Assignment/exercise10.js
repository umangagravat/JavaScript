// 10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"


console.log("10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.");

function changeCase(str) {
    let strSpl = str.split('');
    return strSpl.map((char,index,array) => (char === char.toUpperCase()) ? char.toLowerCase() : char.toUpperCase()).join('');
    }
console.log(changeCase('AaBbc'));
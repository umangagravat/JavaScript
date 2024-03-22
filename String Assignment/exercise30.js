// 30. Write a JavaScript function that checks whether a string ends with a specified suffix.
// Test Data :
// console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
// true
// console.log(string_endsWith('JS PHP PYTHON',''));
// false


function string_endsWith(str1, str2) {
    if (str2 === '' || str2 === null || !str1.endsWith(str2)) return false;
    if (str1.endsWith(str2)) return true;
};
console.log(string_endsWith('JS PHP PYTHON', 'PYTHON'));
console.log(string_endsWith('JS PHP PYTHON', 'PHP')); 
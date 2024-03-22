// 37. Write a JavaScript function to test case-insensitive (except special Unicode characters) string comparison.
// Test Data :
// console.log(compare_strings('abcd', 'AbcD'));
// true
// console.log(compare_strings('ABCD', 'Abce'));
// false


function compare(str1, str2) {
    if (str1.toUpperCase() === str2.toUpperCase()){
        return true;
    }else{
        return false;
    }
}

console.log(compare('abcd', 'ABcD'));
console.log(compare('ABCD', 'Abce'));

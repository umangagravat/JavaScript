// 26. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
// Test Data :
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// "The quick brown fox jumps over lazy dog"


function remove(str1, str2) {
    return str1.replace(str2, '');
};
console.log(remove("The quick brown fox jumps over the lazy dog", 'the'));
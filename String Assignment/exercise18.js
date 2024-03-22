// 18. Write a JavaScript function to count substrings in a string.
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1

function count(str, substr) {
    str = str.split(" ");
    return str.filter((a,index,array) => a.toLowerCase() === substr).length;
}
console.log(count("The quick brown fox the jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox')); 
// 38. Write a JavaScript function to create a case-insensitive search.
// Test Data :
// console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
// "Matched"
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
// "Matched"
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
// "Not Matched"

function caseSensitive(str1, str2) {
    var str1 = str1.toLowerCase();
    var str2 = str2.toLowerCase();
    var res = str1.includes(str2);
    if (res === true) {
        return 'Matched';
    }
    else {
        return 'Not matched';
    }
};

console.log(caseSensitive('JavaScript Exercises', 'exErcises'));

console.log(caseSensitive('JavaScript Exercises', 'Exercises'));

console.log(caseSensitive('JavaScript Exercises', 'Exercisess'));
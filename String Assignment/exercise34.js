// 34. Write a JavaScript function to convert a string to title case.
// Test Data :
// console.log(sentenceCase('PHP exercises. python exercises.'));
// "Php Exercises. Python Exercises."


function sentenceCase(str) {
    var low = str.toLowerCase().split(' ');
    var res = '';
    for (var i = 0; i < low.length; i++) {
        res += low[i].substring(0, 1).toUpperCase() + low[i].substring(1) + ' ';
    }
    return res;
};
console.log(sentenceCase('PHP exercises. python exercises.'));
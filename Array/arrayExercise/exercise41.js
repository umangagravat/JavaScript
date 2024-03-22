// Write a JavaScript function to generate an array between two integers of 1 step length.

// Test Data :
// console.log(rangeBetwee(4, 7));
// [4, 5, 6, 7]
// console.log(rangeBetwee(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]



function rangeBetwee(from, to) {
    var resultArr = [];
    for (var i = from; i <= to; i++) {
        resultArr.push(i);
    }
    return resultArr;
}
console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));
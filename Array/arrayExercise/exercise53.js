// 53. Write a JavaScript program to count the number of arrays inside a given array.

// Test Data :
// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3
// Expected Output:
// Number of arrays inside the said array: 2
// Number of arrays inside the said array: 3

function test1(numOfArr) {
    return numOfArr.filter((num) => num.length).length;
}
numOfArr = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]];
console.log("Number of arrays inside :" + test1(numOfArr));
numOfArr = [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]];
console.log("Number of arrays inside :" + test1(numOfArr));
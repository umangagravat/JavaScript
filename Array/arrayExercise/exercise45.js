// 45. Write a JavaScript program to find all the unique values in a set of numbers.

// Test Data :
// [1, 2, 2, 3, 4, 4, 5]
// [1, 2, 3, 4, 5]
// [1, -2, -2, 3, 4, -5, -6, -5]
// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]


function findUnique(arr) {

    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr1.includes(arr[i])) {
            arr1.push(arr[i]);
        }
    }

    return arr1;
}

console.log(findUnique([1, 2, 2, 3, 4, 4, 5]))
console.log(findUnique([1, 2, 3, 4, 5]))
console.log(findUnique([1, -2, -2, 3, 4, -5, -6, -5]))
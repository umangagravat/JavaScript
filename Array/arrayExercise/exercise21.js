
// 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]

function flatten(array, level = false) {

    if (level == true) {
        const arr1 = array.flat();
        return arr1;
    } else {
        const arr2 = array.flat(3);
        return arr2;
    }
}

console.log(flatten([1, [2], [3, [[4]]], [5, 6]],));
console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));
console.log(flatten([1, [2], [3, [[4]]], [[5], 6]],));
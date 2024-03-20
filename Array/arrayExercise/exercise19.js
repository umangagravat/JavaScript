// 19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]


function sumOfArray(array1, array2) {
    let sum = [];

    for (let i = 0; i < array1[i], array2[i]; i++) {

        if (array1.length > array2.length)
            sum.push(array1[i] + array2[i]);
        else
            sum.push(array2[i]);
    }
    return sum;
}

console.log(sumOfArray([1, 0, 2, 3, 4, 5, 6], [3, 5, 6, 7, 8, 17, 15, 20]));
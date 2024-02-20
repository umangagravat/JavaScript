// 11. Write a JavaScript program to find the sum of squares of a numerical vector.

function sum_sq(value) {

    return value.reduce(function (sum, n) {
        return (n * n) + sum;
    }, 0)
}

console.log(sum_sq([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
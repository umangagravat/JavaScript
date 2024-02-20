// 12. Write a JavaScript program to compute the sum and product of an array of integers.


const sum_product = [1, 2, 3, 4, 5, 6]

const sum = sum_product.reduce((sum, n) => sum + n);
const product = sum_product.reduce((prod, n) => prod * n);
console.log(`sum : ${sum} Product : ${product}`);


// 20. Write a JavaScript program to find duplicate values in a JavaScript array.


const arr = [10, 20, 30, 20, 20, 40, 50, 50, 30];
const rem = arr.filter((curr, index) => arr.indexOf(curr) !== index)

console.log(rem);

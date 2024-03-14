// 17. Write a JavaScript program to shuffle an array.

var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(myArray) {
    return myArray.sort((arr) => (Math.random()) - 0.2);
}
console.log(shuffle(myArray));
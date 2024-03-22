// 37. Write a JavaScript function to create a specified number of elements with a pre-filled string value array.

// Test Data :
// console.log(array_filled(3, 'default value'));
// ["default value", "default value", "default value"]
// console.log(array_filled(4, 'password'));
// ["password", "password", "password", "password"]

function array_filled(value, crt) {
    let newArr = [];
    for (let i = 0; i < value; i++) {
        newArr[i] = crt;
    }
    return newArr;
}

console.log(array_filled(3, 'default value'));
console.log(array_filled(4, 'password'));
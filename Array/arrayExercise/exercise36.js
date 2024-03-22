// 36. Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.

// Test Data :
// console.log(array_filled(6, 0));
// [0, 0, 0, 0, 0, 0]
// console.log(array_filled(4, 11));
// [11, 11, 11, 11]

function array_filled(value,crt){

    let newArr = [];
    for(let i = 0; i < value; i++){
        newArr[i] = crt;
    }
    return newArr;

}
console.log(array_filled(6, 0));
console.log(array_filled(4, 11));


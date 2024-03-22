// 29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.

// Test Data :
// console.log(num_string_range('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

function num_string_range(start,end,gap){
    let newArr = [];
    const str = "abcdefghijklmnopqrstuvwxyz".split('');
    for (let i=0; i< str.length; i+=gap){
        newArr.push(str[i]);
    }
    return newArr;
}

console.log(num_string_range('a', "z", 2));

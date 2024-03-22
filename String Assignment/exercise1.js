// 1.  Write a JavaScript function to check whether an 'input' is a string or not.

// Test Data :

// console.log(is_string('w3resource'));
// true

// console.log(is_string([1, 2, 4, 0]));
// false
console.log("1.  Write a JavaScript function to check whether an 'input' is a string or not.")
const isString = function(value) {
        if (typeof(value) === 'string') {
            return true;
        }
        else{
            return false;
        }
}
console.log(isString(' '));
console.log(isString([1, 2, 4, 0]));
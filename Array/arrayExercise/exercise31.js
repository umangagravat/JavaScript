// 31. Write a JavaScript function to remove a specific element from an array.

// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]


function removeArray(array, n) {
    const index = array.indexOf(n);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  }
  console.log(removeArray([2, 5, 9, 6], 5));



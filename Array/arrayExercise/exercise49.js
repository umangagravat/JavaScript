// // Function to find the third smallest number in an array
// Write a JavaScript program that takes an array of numbers and returns the third smallest number.

// Test Data:

// (2,3,5,7,1) -> 3
// (2,3,0,5,7,8,-2,-4) -> 0

function test(arr_nums) {
    return arr_nums.sort((x, y) => y - x)[arr_nums.length - 3];
  }
  
  nums = [2, 3, 5, 7, 1];
  console.log("Original array of numbers: " + nums);
  console.log("Third smallest number  " + test(nums));
  
  nums = [2, 3, 0, 5, 7, 8, -2, -4];
  console.log("Original array of numbers: " + nums);
  console.log("Third smallest number " + test(nums));
  
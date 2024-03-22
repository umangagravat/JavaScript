// 21. Write a JavaScript function to repeat a string for a specified time.
// Test Data :
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// Output :
// "aaaa"
// "Error in string or count."


function repeat(string, count) 
  {
    if ((string == null) || (count < 0) || (count === Infinity) || (count == null))
      {
        return('Error in string or count.');
      }
    return string.repeat(count);
  }

console.log(repeat('a', 8));
console.log(repeat('a'));
console.log(repeat('a', -2));
console.log(repeat('a', Infinity));
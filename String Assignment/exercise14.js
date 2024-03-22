// 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."

function insert(firstString, insString, position) {

    if (typeof (position) == "undefined") {
        position = 0;
    }
    if (typeof (insString) == "undefined") {
        insString = '';
    }
    return firstString.slice(0, position) + insString + firstString.slice(position);
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.', 'JavaScript '));
console.log(insert('We are doing some exercises.', 'JavaScript ', 18));












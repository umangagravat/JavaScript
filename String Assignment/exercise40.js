// 40. Write a JavaScript function to uncapitalize the first letter of each word of a string.
// Test Data :
// console.log(unCapitalize_Words('Js String Exercises'));
// "js string exercises"


// function capitalizeWords(str)
// {
//  return str.toLowerCase();
// }
// console.log(capitalizeWords('Js String Exercises'));

function unCapitalize_Words(str) {
    str = str.split(" ");
    let x = str.length; 
    for (let i = 0; i < x; i++) {
        str[i] = str[i][0].toLowerCase() + str[i].substr(1);
    }
    return str.join(" ");
}
console.log(unCapitalize_Words('Js String Exercises'));
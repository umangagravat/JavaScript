// 25. Write a JavaScript function to alphabetize a given string.
// Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
// Test Data :
// console.log(alphabetize_string('United States'));
// Output :
// "SUadeeinsttt"

function string(str) {
    
    return str.split('').sort().join('').trim();

}
console.log(string('United States'));
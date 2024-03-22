// 5. Write a JavaScript function to convert a string into abbreviated form.

// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

console.log("5. Write a JavaScript function to convert a string into abbreviated form.")
const abbrev_name = function(agrs){
   let nameSplits = agrs.trim().split(" ");
   return nameSplits[0]+" " + nameSplits[1].charAt(0)+ ".";
}
console.log(abbrev_name("Umang Agravt"));
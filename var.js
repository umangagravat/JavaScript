console.log("hello");

//variable
var Name = "umang";
console.log(Name);

//let variable
let address = "Ahmedabad";
console.log(address);

//const variable
const student = {
    firstName : "umang agravat",
    email : "umang@gmail.com",
    age : 21,
    phoneNumber : 4234525352
};
console.log(student.email);

//String methods
const str ="Umang agravat";
const str1 = 123;
const str2 ="     hello     "

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.charAt(9));
console.log(str.length);
console.log(str.slice(0,5));
console.log(str.substring(0,7));
console.log(str.concat(str1));
console.log(str.replace("a", "A"));
console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());
console.log(str.repeat(4));
console.log(str[4]);
console.log(str.charCodeAt(4));
console.log(str.substr(3,5));
console.log(str.padStart(40,5));
console.log(str.padEnd(40,5));
console.log(str.replaceAll("Umang","Ajay"));
console.log(str.split(" "));

//String serach methods
console.log(str.indexOf("Um")); 
console.log(str.lastIndexOf("a"));
console.log(str.indexOf("a", 7));
console.log(str.match("man"));
console.log(str.includes("Uma"));
console.log(str.includes("ag",5));
console.log(str.startsWith("Umang"));
console.log(str.startsWith("agravat",6));
console.log(str.endsWith("agravat"));
console.log(str.endsWith("agravat",13));
console.log(str.search("ng"));
console.log(str.matchAll("man"));

//Template Literals
let index = 6;
console.log(`an index of ${index} return the character ${str.charAt(index)}`);
console.log(`welcome ${str}`);






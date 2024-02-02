//Write a JavaScript program to list the properties of a JavaScript object.
const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

const std = Object.keys(student);
console.log(std);

//Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
console.log(student);
delete student["rollno"];
console.log(student);

//Write a JavaScript program to get the length of a JavaScript object.
objLength = Object.keys(student).length;
console.log(objLength);


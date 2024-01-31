
//Objects
console.log("Using Objects");
const person = {
            firstName : "umang",
            lastName : "agravat",
            age : 21,
            email : "umang@123",
            address :{
                flatNo : 19,
                recidency : "shivalik"
            }
};

console.log(person.firstName);

//Nested object
console.log("Using Nested objects");
const employee = {
            empName : "umang",
            age : 21,
            email : "umang@123.com",
            address :{
                flatNo : 19,
                recidency : "shivalik"
            }
};
console.log(employee.address.flatNo);
console.log(employee["address"]["recidency"]);
console.log(employee["address"])

// Adding new properties
employee.nationality = "indian";
console.log(employee);

//deleting properties
delete employee.nationality;
console.log(employee);

//Spread operators
const obj1 = {...person,...employee};
console.log(obj1);

//Object.assign() method
console.log("object.assign() method");
const course = {
    courseName : "web development",
    credit : 3
};
const grade = {
    score : 92,
    class : "first"
};

const finalResult = Object.assign(course,grade,employee);
console.log(finalResult);
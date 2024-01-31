
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
console.log(person["firstName"]);

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

//Object.create() method
console.log("Object.create() method");
const emp ={
    "id":1,
    "emp_name": "Tiger Nixon",
    "emp_salary": 320800,
    "emp_age": 61,
    "emp_email": "tiger@gmail.comm"
};
console.log(emp);

const obj = Object.create({
        "id":1,
        "emp_name": "Tiger Nixon",
        "emp_salary": 320800,
        "emp_age": 61,
        "emp_email": "tiger@gmail.comm"
});
console.log(obj);
delete obj.emp_email; //delete is not peform in .create method

//Object.keys() method
const key = Object.keys(emp);
console.log(key);

//Object.values() method
const value = Object.values(emp);
console.log(value);









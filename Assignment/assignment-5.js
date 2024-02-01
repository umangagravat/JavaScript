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

//Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
 ];

 for(let i=0; i<library.length; i++)
    {
        let status = Object.values(library[i])
        console.log(status);
    }

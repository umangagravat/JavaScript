const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// 1. Get an array of all names
console.log(" 1. Get an array of all names");
const allName = characters.map(getAllName)
function getAllName(charName, index, array) {
    return charName.name;
}
console.log(allName);

// 2. Get an array of all heights
console.log(" 2. Get an array of all heights");
const characterHeight = characters.map(getAllHeight)
function getAllHeight(charHeight, index, array) {
    return charHeight.height;
}
console.log(characterHeight)

//3. Get an array of objects with just name and height properties
console.log("3. Get an array of objects with just name and height properties");
const nameAndHeight = characters.map((char, index, array) => ({
            name : char.name,
            height : char.height
}));
console.log(nameAndHeight);

//4. Get an array of all first names
console.log("4. Get an array of all first names");
const firstName = characters.map((char, index, array) => 
            char.name.split(' ').at(0)
)
console.log(firstName);

//5. Square the value of every element in the array.
console.log("5. Square the value of every element in the array.");
const input = [1, 2, 3, 4, 5];
const squareOfElement = input.map((number,index,array) => number*number)
console.log(squareOfElement);

//6. Get name initials (Get first character of each name)
console.log("6. Get name initials (Get first character of each name)");
const input1 = "George Raymond Richard Martin";
const newarr =  input1.split(' ');
const firstChar = newarr.map((char,index,array) => char.at(0))
console.log(firstChar);

//7. Find the difference in age between the oldest and youngest family members, 
//and return their respective ages and the age difference.
const input2 = [
    {
        name: "John",
        age: 13,
    },
    {
        name: "Mark",
        age: 56,
    },
    {
        name: "Rachel",
        age: 45,
    },
    {
        name: "Nate",
        age: 67,
    },
    {
        name: "Jennifer",
        age: 65,
    },
];

const ages = input2.map((userAge,index,array) => userAge.age)
const ageResult = [Math.min(...ages),Math.max(...ages), Math.max(...ages) - Math.min(...ages)];

console.log(ageResult);

//8. Numeronyms (Take first and last character and add count of remaining characters in between)
const input3 = "Every developer likes to mix kubernetes and javascript";
const words = input3.split(' ');
const formattedWord = words.map(
    function(word, index, array){
        return word.length <= 3 ? word : `${word.at(0)}${word.length - 2}${word.at(-1)}`
    }
)
const result = formattedWord.join(' ');
console.log(result);


//9. Uppercase Strings
//Task: Given an array of strings, create a new array with each string converted to uppercase.
console.log("7. Uppercase Strings")
const arr = ['umang']
const upparCase = arr.map((upStr,index,array) => upStr.toUpperCase())
console.log(upparCase);

//10. Given an array of numbers, create a new array with only the square of even numbers.
const input4 = [1,2,3,4,5,6,7,8,9,10];
const square = input4.filter(
function (num, index, array) {
            return (num % 2 == 0) ? true : false
        }
)
const squareOfNumber = square.map((num,index,array) => num*num)
console.log(squareOfNumber);

//12. Calculate Area of Rectangles
//Task: Given an array of rectangles with width and height, create a new array with the calculated area of each rectangle.

const rectangles = [
    { width: 3, height: 5 },
    { width: 4, height: 8 },
    { width: 2, height: 6 }
    ];

const result1 = rectangles.map((re, index, array) => re.height*re.width)
console.log(result1);

//13. Task: Given an array of items, create an HTML list using the map method.
//Steps:
//Declare an array of items.
//Use the map method to create an HTML list string.

const items = ['Apple', 'Banana', 'Cherry', 'Date'];
const itemList = items.map((list,index,array) => `<li>${list}</li>`);
const finalItem = (itemList.join(""));
const fullArr =`<ul>${finalItem}</ul>`;
console.log(fullArr);
















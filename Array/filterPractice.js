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

//1. Get characters with mass greater than 100
console.log("Get characters with mass greater than 100");
const charmass = characters.filter(
    function massGrtThan(char, index, array) {
        return (char.mass >= 100) ? true : false
    }
)
console.log(charmass);

//2. Get characters with height less than 200
console.log("2. Get characters with height less than 200");
const charheight = characters.filter(
function massGrtThan(char, index, array) {
        return (char.height <= 200) ? true : false
    }
)
console.log(charheight);

//3. Get all male characters
console.log("Get all male characters");
const maleChar = characters.filter(
function allMaleChar(char, index, array) {
        return (char.gender == 'male') ? true : false
    }
)
console.log(maleChar);

//4. Get all female characters
console.log("Get all female characters");
const femaleChar = characters.filter(
function allMaleChar(char, index, array) {
        return (char.gender == 'female') ? true : false
    }
)
console.log(femaleChar);

//5. Write a function which returns odd/even numbers and store into odd/even array.
console.log("5. Write a function which returns odd/even numbers and store into odd/even array.")
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15];
const evenNum = input.filter(
function (num, index, array) {
        return (num % 2 == 0) ? true : false
    }
)
const oddNum = input.filter(
function (num, index, array) {
        return (num % 2 != 0) ? true : false
    }
)
console.log(evenNum);
console.log(oddNum);

//6.  Sum of every positive element
console.log("6. Sum of every positive element");
const input1 = [1, -4, 12, 0, -3, 29, -150];
const num = input1.filter((num, index, array) => num > 0);
let sum = 0;
for (let i = 0; i < num.length; i++) {
    sum += num[i];
}
console.log(sum);

//7. Check wheather number is divisible by 2 or not;
console.log("7. Check wheather number is divisible by 2 or not;")
const input3 = [1, 2, 3, 4, 5];
const dividedBytwo = input3.filter(
function (num, index, array) {
        return (num % 2 == 0) ? true : false
    }
)
console.log(dividedBytwo);




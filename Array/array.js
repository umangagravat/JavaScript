const cars = ["saab","vlovo","bmw","suzuki","tata","audi","ford","mahendra","isuzu"]
console.log(cars);


//array length
console.log("<===================length() Method===================>");
let size = cars.length;
console.log(size);


//toString()
console.log("<===================toString() Method===================>");
let str = cars.toString();
console.log(str);

//Array At()
console.log("<===================at() Method===================>");
let car = cars.at(3);
console.log(car);

// Array join()
console.log("<===================join() Method===================>");
let join = cars.join("*")
console.log(join);

// Array pop()
console.log("<===================pop() Method===================>");
let pop = cars.pop();
cars.pop()
console.log(pop);
console.log(cars);

// Aarray push()
console.log("<===================push() Method===================>");
let push = cars.push("isuzu");
console.log(push);
cars.push("mahendra")
console.log(cars);

//shift()
console.log("<===================Shift() Method===================>");
cars.shift();
let shift = cars.shift()
console.log(shift);
console.log(cars);

//unshift()
console.log("<===================Unshift() Method===================>");
cars.unshift("honda");
let unshift = cars.unshift("hyundai");
console.log(cars);

//delete()
console.log("<===================Delete() Method===================>");
delete cars[3];
console.log(cars);
// cars [3] = "ferrari";
// console.log(cars);

//concat()
console.log("<===================concat() Method===================>");
const fruit = ["apple", "banana", "mango"];
const fruit1 = ["ornage","kiwi"];
const fruit2 = ["pinaple"];
const fruits = fruit.concat(fruit1);
const fruits1 = fruit.concat(fruit1,fruit2);
console.log(fruits);
console.log(fruits1);


//flat()
console.log("<===================flat() Method===================>");
const myArr = [[1,2,[6,7,[8,9]]],[3,4],[5,11]];
const newArr = myArr.flat(3);
console.log(newArr);

//splice() method
console.log("<===================splice() Method===================>");
const fruit3 = ["Banana", "Orange", "Apple", "Mango","pinaple","papaya"];
fruit3.splice(2,2,"lamon","kiwi");
console.log(fruit3);

//tospliced() method
console.log("<===================tospliced() Method===================>");
const fruit4 = ["Banana", "Orange", "Apple", "Mango","pinaple","papaya"];
const frt = fruit3.splice(2,2,"lamon","kiwi");
console.log(frt);
console.log(fruit4);

//Slice() method
console.log("<===================slice() Method===================>");
const slice = fruit4.slice(2);
//const slice = fruit4.slice(1,3);
console.log(fruit4);
console.log(slice);










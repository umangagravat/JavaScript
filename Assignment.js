//Assignment 1:
console.log("Assignment:1")
//1. Create an object called "mexico" with the following properties
const mexico = {
    "id": 24,
    "name": "Mexico",
    "capital": "Mexico city",
    "neighbours": ["USA", "Guatemala", "Belize"]
};

//2. Print out "mexico" to the terminal
console.log(mexico);

//3. Change "id" to be 25
mexico.id = 25;
console.log(mexico);

//Add "Honduras" to the list of neighbours to "mexico"
mexico.neighbours.push("Honduras");
console.log(mexico);

//5. Print out "mexico" to the terminal again
console.log(mexico);

// Assignment :2
console.log("Assignment:2")
//1. Create an object called "myPet" with the following properties:
const myPet = {
        "name": "Sudo",
        "type": "Dog",
        "breed": "Poodle",
        "age":7,
        "friends": ["Bit", "Byte", "Data"]
};

//2. Print out "myPet" to the terminal
console.log(myPet);

//3. Add a new property: colour -> "Black"
myPet.color = "black";
console.log(myPet);

//4. Change "breed" to be "Beagle"
myPet["Beagle"] = myPet["breed"];
delete myPet.breed;
console.log(myPet);

//5. Remove "Data" from the list of friends for "myPet"
while (myPet["friends"].length) { 
    myPet["friends"].pop(); 
} 

//6. Print out "myPet" to the terminal again
console.log(myPet);

//7. Add "Chip" to the list of friends for "myPet"
myPet.friends.push("Chip");

//8. Print out "myPet" to the terminal again
console.log(myPet);

// Assignment 3
console.log("Assignment:3")
//1. Create the following 3 objects:
const banana = {name: "banana", quantity: 1, price: 1.95}
const apple = {name: "apple", quantity: 1, price: 1.45}
const candy = {name: "candy", quantity: 1, price: 3.50}

//2. Create an object called "store" with the following properties:
const store = {
    "storeNumber": 5,
        "locationCity": "Milan",
        "locationCountry": "Italy",
        "products": [banana, apple, candy]
}

//3. Print out "store" to the terminal
console.log(store);

//4. Only print out all the product objects in "store"
console.log(store["products"]);

//5. Only print out the 3rd product object i"n "store"
console.log(store.products[2]);

//6. Change the price of the banana object through the store object to be 1.75..
store.products[0].price = 1.75;

//7. Print out both "store" and "banana"
console.log(store);
console.log(banana);

//8. Change the price of the candy object directly to be 4.99
candy.price = 4.99;
console.log(candy);

//9. Print out both "store" and "candy"
console.log(store);
console.log(candy);
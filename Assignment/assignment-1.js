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
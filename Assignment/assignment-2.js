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
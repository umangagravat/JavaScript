//Assignment 4
//1. Create an object called "houseForSale" with the following properties:
const houseForSale = {
    "area": 940,
    "value": 320000,
    "streetName": "Fifth Street",
    "built": "2012",
    "owner":{name: "Blake", age: 29},
    "offers": [290000, 295000, 315000, 312000]
}

// 2. Print out "houseForSale" to the terminal
console.log(houseForSale);

//3. Delete the property with the key "built"
delete houseForSale.built;
console.log(houseForSale);

//4. Change the age of the owner to be 30 inside "houseForSale"
houseForSale.owner.age=30;  
console.log(houseForSale);

//5. Print out the maximum offerPrice
let maxOffer = 0;
for(let i = 0; i < houseForSale.offers.length; i++) {
    if(houseForSale.offers[i] > maxOffer) {
        maxOffer = houseForSale.offers[i];
    }
}
console.log(maxOffer);

//6. Add a new property: "sale price" -> 312000
houseForSale['sale price']= 312000;


//7. Print out "houseForSale" to the terminal
console.log(houseForSale);


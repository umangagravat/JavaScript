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


// ## MAP
// 1. Get an array of all names
console.log("1. Get an array of all names");
const charName = characters.map((getAllName,index,Array) => getAllName.name);
console.log(charName); 


// 2. Get an array of all heights
console.log("2.Get an array of all height");
const charHeight = characters.map((getHeight,index,array) => getHeight.height);
console.log(charHeight);


// 3. Get an array of objects with just name and height propertiesge
console.log("3. Get an array of objects with just name and height propertiesge");
const charDetails = characters.map((getDetails,index,array) => ({ 
            name : getDetails.name,
            height : getDetails.height
}));
console.log(charDetails);


// 4. Get an array of all first names
console.log("4. Get an array of all first names");
const firstName = characters.map((fName,index,arary) =>
        fName.name.split(" ").at(0)
);
console.log(firstName);

//***REDUCE***
//1. Get total mass of all characters
console.log("1. Get total mass of all characters");
const charMass = characters.reduce((acc,getMass,index,array) => {
        return acc + getMass.mass.length;    
}, []);
console.log(charMass);

//2. Get total height of all characters
console.log("2. Get total height of all characters");
const totalHeight = characters.reduce((acc,height,index,array) => {
    return acc + height.height.length;   
}, []);
console.log(totalHeight);


//3. Get total number of characters by eye color
console.log("3. Get total number of characters by eye color");
const totalNumber = characters.reduce((acc,getNumber,index,array) => {
    return acc + getNumber.eye_color.length;
}, []);
console.log(totalNumber);

//4. Get total number of characters in all the character names
console.log("4. Get total number of characters in all the character names");
const totalName = characters.reduce((acc,getName,index,array) => {
    return acc + getName.name.length;
}, []);
console.log(totalName);


//***FILTER***
//1. Get characters with mass greater than 100
console.log("1. Get characters with mass greater than 100");
const massGrtThan = characters.filter((grt,index,arary) => grt.mass >= 100);
console.log(massGrtThan);


//2. Get characters with height less than 200
console.log("2. Get characters with height less than 200");
const heightLessThan = characters.filter((less,index,array) => less.height <= 200);
console.log(heightLessThan);


//3. Get all male characters
console.log("3. Get all male characters");
const getmale = characters.filter((male,index,array) => male.gender == 'male');
console.log(getmale);


//4. Get all female characters
console.log("4. Get all female characters");
const getFemale = characters.filter((female,index,array) => female.gender == 'female');
console.log(getFemale);



//***SORT***
//1. Sort by mass
console.log("1. Sort by mass");
const getSortMass = characters.sort((acc,sortMass,index,array) => acc.mass - sortMass.mass);
console.log(getSortMass);


//2. Sort by height
console.log("2. Sort by height");
const getSortHeight = characters.sort((acc,sortHeight,index,array) => acc.height - sortHeight.height);
console.log(getSortHeight);


//3. Sort by gender
console.log("3. Sort by gender");
const getSortGender = characters.sort((acc,sortGender,index,array) => acc.gender - sortGender.gender);
console.log(getSortGender);


//4. Sort by name
console.log("4. Sort by name");
const getSortName = characters.sort((acc,sortName,index,array) => (acc.name > sortName.name) ? 1 : -1);
console.log(getSortName);


//***EVERY***
//1. Does every character have blue eyes?
console.log("1. Does every character have blue eyes?")
const checkBlueEyes = characters.every((blueEyes,index,array) => {
    return blueEyes.eye_color == 'blue'
});
console.log(checkBlueEyes);


//2. Does every character have mass more than 40?
console.log("2. Does every character have mass more than 40?")
const checkMass = characters.every((charMass,index,array) => {
    return (charMass.mass > 40) ? true : false
});
console.log(checkMass);


//3. Is every character shorter than 200?
console.log("3. Is every character shorter than 200?");
const checkHeight = characters.every((charHeight,index,array) => {
    return (charHeight.height < 200)? true : false
});
console.log(checkHeight);


//4. Is every character male?
console.log("4. Is every character male?");
const checkMale = characters.every((checkMale,index,array) => {
    return (checkMale.gender == 'male')? true : false
});
console.log(checkMale);


//***SOME***
//1. Is there at least one male character?
console.log("1. Is there at least one male character?");
const leastMale = characters.some((male,index,array) => {
        return male.gender == 'male';
});
console.log(leastMale)


//2. Is there at least one character with blue eyes?
console.log("2. Is there at least one character with blue eyes?");
const leastEye = characters.some((eyecolor,index,array) => {
    return eyecolor.eye_color == 'blue';
});
console.log(leastEye);


//3. Is there at least one character taller than 210?
console.log("3. Is there at least one character taller than 210?");
const leastHeight = characters.some((charHeight,index,array) => {
    return (charHeight.height >= 210) ? true : false
});
console.log(leastHeight);


//4. Is there at least one character that has mass less than 50?
console.log("4. Is there at least one character that has mass less than 50?");
const leastMAss = characters.some((charMass,index,array) => {
    return (charMass.mass <= 50) ? true : false
});
console.log(leastMAss);
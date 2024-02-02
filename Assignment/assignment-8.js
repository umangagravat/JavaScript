const user ={
    "id": 1,
    "name": "umang",
    "company": "isummation"
};

const result = [];
const userkey = Object.keys(user);
const uservalue = Object.values(user);

for(let i=0; i<userkey.length; i++)
    {
        const innervalue = [];
        innervalue.push(userkey[i]);
        innervalue.push(uservalue[i]);
        result.push(innervalue);
    }
    console.log(result);

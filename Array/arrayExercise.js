// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

function is_array(args) {
   if (typeof (args) == 'object' && (args) !== null) {
      return true;
   } else {
      return false;
   }
};

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));


// 2. Sum of every positive element
const input = [1, -4, 12, 0, -3, 29, -150];

const sumOfPossitiveValue = input.filter((num, index, array) => num > 0).reduce((acc, sum, index, array) =>
   acc + sum
   , 0);
console.log(sumOfPossitiveValue);

// Customer object
let customers = [
   {
      'id': 1,
      'f_name': 'Abby',
      'l_name': 'Thomas',
      'gender': 'M',
      'married': true,
      'age': 32,
      'expense': 500,
      'purchased': ['Shampoo', 'Toys', 'Book']
   },
   {
      'id': 2,
      'f_name': 'Jerry',
      'l_name': 'Tom',
      'gender': 'M',
      'married': true,
      'age': 64,
      'expense': 100,
      'purchased': ['Stick', 'Blade']
   },
   {
      'id': 3,
      'f_name': 'Dianna',
      'l_name': 'Cherry',
      'gender': 'F',
      'married': true,
      'age': 22,
      'expense': 1500,
      'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
   },
   {
      'id': 4,
      'f_name': 'Dev',
      'l_name': 'Currian',
      'gender': 'M',
      'married': true,
      'age': 82,
      'expense': 90,
      'purchased': ['Book']
   },
   {
      'id': 5,
      'f_name': 'Maria',
      'l_name': 'Gomes',
      'gender': 'F',
      'married': false,
      'age': 7,
      'expense': 300,
      'purchased': ['Toys']
   }
];

const todos = [
   {
   "userId": 1,
   "id": 1,
   "title": "delectus aut autem",
   "completed": false
 },
 {
   "userId": 2,
   "id": 2,
   "title": "quis ut nam facilis et officia qui",
   "completed": false
 },
 {
   "userId": 3,
   "id": 3,
   "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
   "completed": true
 },   
 {
   "userId": 4,
   "id": 4,
   "title": "illo expedita consequatur quia in",
   "completed": false
 }, 
 {
   "userId": 5,
   "id": 5,
   "title": "molestiae perspiciatis ipsa",
   "completed": true
 }
];

//****Filter****
//1. filter out senior citizens customers
console.log("1. filter out senior citizens customers");
const seniorCitizen = customers.filter((seniorCitizenCustomer, index, array) => {
   return seniorCitizenCustomer.age >= 60;
})
console.log("senior Citizen = ", seniorCitizen);


//2 filter out which customer expenses is more than 500
console.log("2 filter out which customer expenses is more than 500");
const customerExpense = customers.filter((maxExpense, index, array) => {
   return maxExpense.expense >= 500;
})
console.log(customerExpense);


//3 filter out that customer who is female, merried and age is greter than 20
console.log("3 filter out the customer who is female, merried and age is greter than 24");
const customerMerried = customers.filter((getCustmer, index, array) => {
   return getCustmer.married == 'true' && getCustmer.gender == 'F' && getCustmer.age >= 20;
})
console.log(customerMerried);


//4 filter out that customer who is purchased book.
console.log("4 filter out that customer who is purchase book.");
const customerPurchase = customers.filter((getpurchase, index, array) => {
   for(let i=0; i< getpurchase.length; i++){
       return getpurchase.include('book') ;  
      }
})
console.log(customerPurchase);

//5 uncompleted todos
console.log("5 uncompleted todos");
const complatedTodo = todos.filter((todo,index,array) => {
   return todo.completed == false ;
})
console.log(complatedTodo);



//***Map***
// 1.Transform to add title and full name.
console.log("1. Transform to add title and full name.");
const customerWithFullName = customers.map((customer,index,array) => {
   let title = '';
   if(customer.gender === 'M'){
      title = 'Mr.';
   }else if(customer.gender === 'F' && customer.married){
      title = 'Mrs.'
   }else{
      title = 'Miss.';
   }
   customer['full_name'] = title + " " + customer.f_name + " " + customer.l_name;
   return customer
});
console.log(customerWithFullName);

console.time()
//2. match todos userID with cutomers ID and than create key in customer and show it.
console.log("2. match todos userID with cutomers ID and than create key in customer and show it.");
customers.map((customer,index,array) =>{
   const customerTodos = todos.find((todo,index,array) => todo.userId == customer.id);
   customer ['todos'] = customerTodos;
   return customer;
});
console.log(customers);
console.timeEnd()

//3. Fisrt name
console.log("3. First name");
const complatedTodos = customers.map((name,index,array) => name.f_name);
console.log(complatedTodos);

//***REDUCE***
//1. Get total expenses of all customer
console.log("1. Get total expenses of all customer");
const totalExpense = customers.reduce((acc,exp,index,array) => {
         return acc + exp.expense;
}, 0)
console.log(totalExpense);

//2. match todos userID with cutomers ID and than create key in customer and show it using reduce.
console.log("2. match todos userID with cutomers ID and than create key in customer and show it using reduce.");
const matchId = todos.reduce((acc,todo,index,array) => {
         const key = `user${todo.userId}`;
         if(!acc.hasOwnProperty(key)){
           acc[key] = [];
         }
         acc[key].push(todo);
      return acc;
},[]);

customers.map((customer,index,array) => {
   const key = `user${customer.id}`;
   customer ['todo1'] = matchId.hasOwnProperty(key) ? matchId[key] : [];
});
console.log(customers);

// //***SORT***
// //1. Sort by first name
console.log("1. Sort by first name");
const getSortName = customers.sort((acc,sortName,index,array) => acc.f_name.localeCompare(sortName.f_name));
console.log(getSortName);

//2. sort by expenses
console.log("2. sort by expenses");
const getExpense = customers.sort((acc,sortExp,index,array) => acc.expense - sortExp.expense)
console.log(getExpense);


// ***EVERY***
// 1. Does every customer have male?
console.log("1. Does every customer have male?");
const getMale = customers.every((customer,index,array) => customer.gender == 'M')
console.log(getMale);

// 2. Dose every todos complated ?
console.log("2. Does every todos complated?");
const complated = todos.every((todo,index,array) => todo.completed == 'true' );
console.log(complated);


//***SOME***
//1. Is there at least one male customer?
console.log("1. Is there at least one male customer?");
const checkMale = customers.some((customer,index,array) => {
   return (customer.gender == 'M') ? true : false
}) 
console.log(checkMale);

 



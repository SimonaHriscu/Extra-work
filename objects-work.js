//////Exercise 1
console.log("Exercise 1")

// Create the function that takes an array with objects and returns the sum of people's budgets.
function getBudgets(arr) {
    newArray= arr.map(element => element.budget);
    return newArray.reduce((a,b)=>a+b);
    
  }
  
  console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ])) 

  console.log(getBudgets([
   { name: "John",  age: 21, budget: 29000 },
   { name: "Steve",  age: 32, budget: 32000 },
   { name: "Martin",  age: 16, budget: 1600 }
  ])) 
  


// Examples
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600



//////Exercise 2
console.log("Exercise 2")


// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for 
//free shipping if the total cost of items purchased exceeds $50.00.

function freeShipping(order) {
    let newArray = Object.values(order);
    return (newArray.reduce((a,b)=>a+b) > 50 )
       
    
}
console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));
console.log(freeShipping({  "Flatscreen TV": 399.99 }));


// Examples
// freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false

// freeShipping({ "Flatscreen TV": 399.99 }) ➞ true

// freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true



//////Exercise 3
console.log("Exercise 3")
// Given an object containing the names and ages of a group of people, return the name of the oldest person.

function oldest(people) {
    let newArr= Object.values(people);
    return newArr.find(elem=>Math.max(elem))
}
console.log(oldest({
       Emma: 71,
       Jack: 45,
       Amy: 15,
       Ben: 29
     }))

// Examples
// oldest({
//   Emma: 71,
//   Jack: 45,
//   Amy: 15,
//   Ben: 29
// }) ➞ "Emma"

// oldest({
//   Max: 9,
//   Josh: 13,
//   Sam: 48,
//   Anne: 33
// }) ➞ "Sam"
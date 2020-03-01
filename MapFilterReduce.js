// Map, Filter, Reduce
console.log("--->Exercise 1:")
// 1. Get total orders
// Return the total amount of orders.
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];

let sum = orders.reduce(all = (a,b) => {
    return a + b.amount
},0);
console.log(sum)


// const totalAmount = (obj)=>{
//     return  obj.reduce((a,b)=>{
//            if(typeof a === 'object'){
//                return a.amount + b.amount
//            }else {
//             return a + b.amount
//             }   
//         })
//   }
//   console.log(totalAmount(orders));


console.log("--->Exercise 2:")
// 2. Increment by 1
// const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
// Create a function that increments each element in the arrayOfNumbers by 1. Return the a new array of modified elements.

arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
let increment = arrayOfNumbers.map(elem => elem + 1);
console.log(increment);

console.log("--->Exercise 3:")
// 3. Filter Evens
// Create a function called filterEvens that filters an array and only return even numbers. The function should take an 
//array of numbers as an argument, and should not use a loop.


///The ES6 version
//filterEvens = [1,2,3,11,12,13];
filterEvens=[22,2,31,110,6,13];

console.log(filterEvens.filter(elem=> elem%2 ===0));

//The function long version
// function filterEvens(arr){
//     return arr.filter(elem=>elem%2 ===0 )
// }
// console.log(filterEvens([1,2,3,11,12,13])); //returns [2,12]
// console.log(filterEvens([22,2,31,110,6,13])); //returns [22,2,110,6]


// Examples:

// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]

console.log("--->Exercise 4:")
// 4. Filter Friends
// Given an array, create a function which filters array based on a search query.
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
function filterItems(arr,str){
    let result =  arr.filter(elem=> elem.includes(str));
    let toString = result.toString();
    return toString;
}

console.log(filterItems(friends, 'ka'));
console.log(filterItems(friends, 'e'));
// Examples

// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, 'ka')); // ["Rika"];
// console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

console.log("--->Exercise 5:")
// 5. Sum Up
// Write a function called sum that uses the reduce method to sum up an array of numbers.

function sum2(arr){
    return arr.reduce((acc,cur)=> acc+cur);
}
console.log(sum2([1,2,3,4,5]));
console.log(sum2([6,7,7]));
// Examples:

// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20

console.log("--->Exercise 6:")
// 6. Square Root
// Given an array of numbers, find the square root of each element in the array.
numbers = [4,9,16]
let newArr = numbers.map(elem => Math.sqrt(elem));
console.log(newArr)
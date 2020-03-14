// Spread the Word

// 1. Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
// Once again create two arrays. Save all elements of both arrays to another variable.
let euroCountries = ["Romania","Italy","Greece"];
let asianCountries=["Thailand","China","Korea"];
//console.log(euroCountries, asianCountries)
euroCountries = euroCountries.concat(asianCountries);
console.log(euroCountries);
let firstArr = ["spring","summer","fall","winter"];
let secondArr = ["flowers","sun","color","snow"];
let mixedArr = [...firstArr,...secondArr];
console.log(mixedArr);

// 2. Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable.
let arr1=["one","two","three"];
let arr2=[...arr1];
arr2.push(100);
console.log(arr2)

// 3. Find the Largest...
// Create a function to find the largest number in an array.
const largestNum=(arr)=>{
    let biggestNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>biggestNum){
          biggestNum=arr[i]
        }  
    }return biggestNum;
}

console.log(largestNum([1,2,56,47,82,3,5,6]));

//or v2:

// let arr = [1,2,56,47,82,3,5,6];
// const largestNum = Math.max(...arr);

// console.log(largestNum);


// 4. Find the Smallest
// Create a function to find the smallest number in an array.


const smallestNum=(arr)=>{
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<min){
          min=arr[i]
        }  
    }return min;
}

console.log(smallestNum([1,2,56,47,82,3,5,6]));

//or v2:

// let arr = [1,2,56,47,82,3,5,6];
// const smallestNum = Math.min(...arr);

// console.log(smallestNum);

// 5. Clone and Merge
// Given two objects:

// const person = {name: "John"}
// const job = {role: "Teacher"}

// 5.1 Clone the person object.
// 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
// 5.3 Then change the values of the properties in the employee object.

const person = {name: "John"}
const job = {role: "Teacher"}
console.log(Object.assign({}, person));
let employee = {...person,...job}
console.log(employee);
employee.name = "Mirela";
employee.role = "assistant";
console.log(employee)

// Bonus: 6. Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all 
//the arguments is a whole number or not.

// Examples

// isWhole(1, 2, 3, 4) ➞ false

// isWhole(9, 2, 2, 5) ➞ false
const isWhole = (...args) => {
    let sum = 0;
    for(let i = 0; i<args.length; i++){
        sum = sum + args[i];
    }
    // let average = sum/args.length;
    if(sum % args.length === 0){
        return true;
    } else {
        return false;
    }
    // return Number.isInteger(average);
}

console.log(isWhole(9, 2, 2, 5));//false
console.log(isWhole(1, 1, 1, 1));//true
console.log(isWhole(6, 2, 8, 4));//true



// Once you have created a function, pass in an array as an argument which contains four elements - check if this method 
//still outputs the correct result!
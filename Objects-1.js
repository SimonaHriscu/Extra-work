// Objects: Part 1
// Please print each of your answers to the console.
console.log("\n Exercise 1:")
// 1. Object Person. Create an object named person. Loop through the object and print both the property and value of 
//the object.
const person = {
    name: "Simona",
    lastName: "Hriscu",
    job: "teacher"
}
for(let [key,value] of Object.entries(person)){
    console.log(`${key} : ${value}`)
}
console.log("\n Exercise 2:")
// 2. Get Values. Create a function that returns an array of all values of an object's properties.

function getObjectValues(obj){
    return Object.values(obj);
}
console.log(getObjectValues({
      choice1: "tea",
      choice2: "coffee",
      choice3: "milk"
    }))

// Examples:
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// Expected output:
// ["tea", "coffee", "milk"] 

console.log("\n Exercise 3:")
// 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.

let person2 = {
      firstName: "Michael",
      lastName: "Smith", 
      job: "driver",
      age: 20, 
      city: "Paris",
      printOut(){
          console.log(`${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}`)

      }
    }

    person2.printOut();
// Example
// let person = {
//   firstName: "Michael",
//   lastName: "Smith", 
//   job: "driver",
//   age: 20, 
//   city: Paris
// }
// Example of Expected Output "Michael Smith is a 20 year old driver in Paris".

console.log("\n BONUS :1")

// Bonus Questions
// 1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.


const objectToArray=(obj)=>{
    return Object.entries(obj);
}

console.log(objectToArray({
      A: 1,
      B: 2,
      C: 3
    }))
console.log(objectToArray({
          cats: 1,
          dogs: 2, 
          turtles: 4
        }))

// Examples:
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// }) 
// Expected output:
// [["A", 1], ["B", 2], ["C", 3]]
// objectToArray({
//   cats: 1,
//   dogs: 2, 
//   turtles: 4
// }) 
// Expected output:
// [["cats", 1], ["dogs", 2], ["turtles", 4]] 

console.log("\n BONUS :2")

// 2. List Properties. Create a function that returns an array of properties of a javascript object.

// const student=(obj)=>{
//     return Object.keys(obj);
// }
// console.log(student({
//       name: "Mike", 
//       class: "4A" ,
//       course: "English"
// }))

let student = {
    name: "Mike", 
    class: "4A",
    course: "English"
}

const getProperties = (object) => {
    let resultArray = [];
    for(let key in object){
        resultArray.push(key);
    }
    return resultArray;
}
console.log(getProperties(student));

// Example
// let student = {
//   name: "Mike", 
//   class: "4A" 
//   course: "English"
// }
// Expected output:
// ["name", "class", "course"]


console.log("\n BONUS :3")

// 3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.

function newObj(){
let first = {firstName: "John"}
let last = {lastName: "Smith"}
let newObj = Object.assign({},first,last);
return newObj;
}
console.log(newObj());


// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}
// Extra Credit: What happens if you merge two objects with the same property values? In merging these two objects, 
//do you expect to change either or both of the original objects? Why or why not? Comment your answers.

console.log("\n BONUS :4")

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.

// function switched(obj){
//     let copy = {};
//     for(let key in obj){
//         copy[obj[key]] = key;
//     }
//     return copy;
// }
// console.log(switched({
//       name: "John", 
//       job: "teacher"
//     }))

const person4 = {
    name: "John", 
    job: "teacher"
  };
  
  const objectReverser = (object) => {
    let objectArray = Object.entries(object);
    for(let i = 0; i<objectArray.length; i++){
      objectArray[i].reverse();
    }
    let resultObject = Object.fromEntries(objectArray);
    console.log(resultObject)
  }
  
  objectReverser(person4)

// Example:
// let person = {
//   name: "John", 
//   job: "teacher"
// }
// Expected Output:
// {"John": name, "teacher": job} 

console.log("\n BONUS :5")

// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: 
//one for the keys of the object and the other for the values of the object.


const house = {
    doors: 2,
    windows: 10,
    garden: 1
  }
  
  const keysAndValues = (object) => {
    let keysArray = Object.keys(object);
    let valuesArray = Object.values(object);
    return [keysArray, valuesArray];
  }
  
console.log(keysAndValues(house)); 
console.log(keysAndValues({key: true}))
console.log(keysAndValues({ a: 1, b: 2, c: 3 }))


// Examples:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
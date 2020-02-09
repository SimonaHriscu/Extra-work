// Finish these Functions

console.log("Exercise 1");
/* 1. a) 
Finish this function, so it outputs each food group with a header of "---" 
example:
    ---    
    apple, 
    banana, 
    orange
    ---
    milk, 
    eggs, 
    cheese
    ---
    tomato, 
    cucumber

*/
const foods = [
  ["apple", "banana", "orange"],
  ["milk", "eggs", "cheese"],
  ["tomato", "cucumber"]
];

const foodPrint = foodArray => {
  for (let i = 0; i < foods.length; i++) {
    console.log("---");
    for (let j = 0; j < foods[i].length; j++) {
      console.log(foodArray[i][j]); // Edit This Line
    }
  }
};

foodPrint(foods);

/* 1. b)
Change The Output to give each group a title:
    ---FRUITS---
    apple, banana, orange
    ---DAIRY---
    milk, eggs, cheese
    ---VEGETABLES---
    tomato, cucumber
*/
const foods2 = [
  ["apple", "banana", "orange"],
  ["milk", "eggs", "cheese"],
  ["tomato", "cucumber"]
];
const foodPrint2 = foodArray => {
  for (let i = 0; i < foods2.length; i++) {
    // console.log("---");
    if (i === 0) {
      console.log("---FRUITS---");
    } else if (i === 1) {
      console.log("---DAIRY---");
    } else if (i === 2) {
      console.log("---VEGETABLES---");
    }
    let localString = "";
    for (let j = 0; j < foods2[i].length; j++) {
      console.log(foodArray[i][j]); // Edit This Line
      if (j === 0) {
        localString = localString + foodArray[i][j];
      } else {
        localString = localString + ", " + foodArray[i][j];
      }
    }
    console.log(localString);
  }
};

foodPrint2(foods2);

console.log("Exercise 2");
/* 2. Finish this function, so that it outputs every item of an array 3 times.
    example output: 
    monday
    monday
    monday
    tuesday
    tuesday
    tuesday
    wednesday
    wednesday
    wednesday
*/

const days = ["monday", "tuesday", "wednesday"];

const dayPrinter = dayArray => {
  for (let i = 0; i < dayArray.length; i++) {
    for (let j = 1; j < 4; j++) {
      console.log(dayArray[i]);
    }
  }
};

dayPrinter(days);

console.log("Exercise 3");
console.log("a)");
/* 3. 
a) Finish this function so it outputs the following:
1
12
123
1234
12345
 */
const numberCounter = () => {
  for (let i = 0; i < 7; i++) {
    let localString = "";
    for (let x = 1; x < i; x++) {
      localString += x;
    }
    console.log(localString);
  }
};

numberCounter();

console.log("b)");
/* 3. b) Finish the function negativeNumberCounter() which outputs the following:
12345
1234
123
12
1
*/

const negativeNumberCounter = () => {
  // Add Code here
  for (let i = 6; i >= 0; i--) {
    let localString = "";
    for (let x = 1; x < i; x++) {
      localString += x;
    }
    console.log(localString);
  }
};

negativeNumberCounter();

console.log("Exercise 4");
/* 4. finish the function so it creates the following output:
 *
 **
 ***
 ****
 *****
 ******
 */

const starMaker = () => {
  // Add code here.
  for(let i=0; i<7;i++){
      let box="";
      for(let j=1; j<i;j++){
          box += "*";
      }
      console.log(box)
  }
};

starMaker();

console.log("Bonus:");
/* 
1. Create a function that outputs the following:
1 1 1 1 1
1 0 0 0 1
1 0 0 0 1
1 0 0 0 1
1 1 1 1 1

2. Create a function that outputs the following:
1
12
123
1234
12345
1234
123
12
1
*/

  
  
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
const foods = [["apple", "banana", "orange"], ["milk", "eggs", "cheese"], ["tomato", "cucumber"]];

const foodPrint = (foodArray) => {
    for (let i = 0; i < foods.length; i++){
        console.log("---");
        for (let j = 0; j < foods[i].length; j++){
            console.log(foodArray[i][j]); // Edit This Line 
        }
    }
}

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

const dayPrinter = (dayArray) => {
    // Add code here
}

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
    for(let i = 0; i < 3; i++){
        let localString = "";
        for(let x = 0; x < i; x++){
            localString += x;
        }
        console.log(localString);
    }
}

numberCounter();

console.log("b)")
/* 3. b) Finish the function negativeNumberCounter() which outputs the following:
12345
1234
123
12
1
*/

const negativeNumberCounter = () => {
    // Add Code here
}

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
}

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

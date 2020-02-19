/**
 * Flash Cards
 * Create a function that outputs the results of a flashcard. A flashcard is an array of three elements: a number, 
 * an operator symbol, and another number. Return the mathematical result of that expression.
 * There are 4 operators: + (addition), - (subtraction), x (multiplication), and / (division). 
 * If the flashcard displays a number being divided by zero, e.g. [3, "/", 0], then return undefined. For division, 
 * round to the hundredths place. So [10, "/", 3] should return 3.33.
 * Examples
 * flash([3, "x", 7]) ➞ 21
 * flash([5, "+", 7]) ➞ 12
 * flash([10, "-", 9]) ➞ 1
 * flash([10, "/", 0]) ➞ undefined
 * flash([10, "/", 3]) ➞ 3.33
 * Notes
 * Flash cards contain only zero or positive numbers.
 */
const flash = (arr)=>{
        let numArr = [];
        for (let i = 0; i < arr.length; i++) {
            if(typeof arr[i] === "number"){
                numArr.push(arr[i]);
            } 
         };
         for (let i = 0; i < arr.length; i++) {
             if(arr[i] === "x"){
                return numArr.reduce((acc,cur) => acc * cur);   
            } else if(arr[i] === "+"){
                return numArr.reduce((acc,cur) => acc + cur);   
            }else if(arr[i] === "-"){
                return numArr.reduce((acc,cur) => acc - cur);   
            }else if(arr[i] === "/")  {
                if(numArr[1] === 0){
                    return undefined;
                }
                let diff = numArr.reduce((acc,cur) => acc / cur);   
                return diff.toFixed(2); 
             }
         }
    }

console.log(flash([3, "x", 7]));
console.log(flash([5, "+", 7]));
console.log(flash([10, "-", 9]));
console.log(flash([10, "/", 0]));
console.log(flash([10, "/", 3]));

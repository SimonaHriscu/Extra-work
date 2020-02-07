console.log("Exercise 1")

// ### 1. Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. 
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

// Examples:

// monthName(3) ➞ "March"

// monthName(12) ➞ "December"

// monthName(6) ➞ "June"

function monthName(num){
    let months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];
           return months[num-1];
}

console.log(monthName(1));

console.log(monthName(12));

console.log(monthName(6));


console.log("Exercise 2:")
// ### 2. Unlucky 13
// Given a sorted array of numbers, remove any numbers that are divisible by 13. 
// Return the amended array.

// Examples:

// unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
// // 182 and 637 are divisible by 13.

// unlucky13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279]
// // No numbers in the array are divisible by 13.

// unlucky13([104, 351, 455, 806, 871]) ➞ []
// // All numbers in the array are divisible by 13.

function unlucky13(arr){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]% 13 !== 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(unlucky13([53, 182, 435, 591, 637]));
console.log(unlucky13([24, 316, 393, 458, 1279]));
console.log(unlucky13([104, 351, 455, 806, 871]));

console.log("Exercise 3:")

// ### 3. Filter out Strings from an Array
// Create a function which filters out strings from an array and returns a new array containing only integers.

// Examples:

// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

// filterList([1, "a", 2, "b", 3, "c"]) ➞ [1, 2, 3]

// filterList([0, -32, "&@A", 64, "99", -128]) ➞ [0, -32, 64, -128]

const filterList = (arr)=>{
    let integers = [];
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i] == "number"){
            integers.push(arr[i])
        }
    }return integers;

}

console.log(filterList([1, 2, 3, "x", "y", 10]))
console.log(filterList([1, "a", 2, "b", 3, "c"]))
console.log(filterList([0, -32, "&@A", 64, "99", -128]))

console.log("Exercise 4:")


// ### 4. Difference between Max and Min Numbers in an Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

// Examples:

// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// // Smallest number is -50, biggest is 32.

// diffMaxMin([44, 32, 86, 19]) ➞ 67
// // Smallest number is 19, biggest is 86.



const diffMaxMin=(arr)=>{
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
   // console.log(maxNum);
   // console.log(minNum);
    let difference = maxNum-minNum;
    return difference;
}

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]))
console.log(diffMaxMin([44, 32, 86, 19]))



console.log("varianta 2 cu loop")

function differenceMaxMin(arr){
    let minimum = arr[0];
    let maximum = arr[0];

    for(let i =0; i<arr.length; i++){
        if (arr[i]<minimum){
            minimum = arr[i];
        }
    }

    for(let i = 0; i<arr.length;i++){
        if(arr[i]>maximum){
            maximum = arr[i];
        }
    }

    let difference = maximum- minimum;
    return difference;

}

console.log(differenceMaxMin([10, 4, 1, 4, -10, -50, 32, 21]))
console.log(differenceMaxMin([44, 32, 86, 19]))
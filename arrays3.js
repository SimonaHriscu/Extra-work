
console.log("Exercise 1:");
// **1. The Greater Numbers.**
// Create a function which accepts two arguments: the first argument being an array of numbers, 
// and the second argument being a number. The function should return the elements of the array which are greater than 
// the second argument. 

// i.e. 

// findGreatest([3, 4, 5], 4) ➞ 5

// findGreatest([10, 20, 30], 12) ➞ 20, 30

// findGreatest([0, 10, 3], 4) ➞ 10

// const findGreatest=(arr, num) =>{
//     for(let i=0; i<arr.length;i++){
//        if(num < arr[i]){
//            return arr[i];
//        }
//     }
// }
// const findGreatest=(arr, num) =>{
//     let biggestNum =[];
//     for(let i=0; i<arr.length;i++){
//        if(num < arr[i]){
//        biggestNum.push(arr[i]);
//        }
//     }return biggestNum;
//     //}return biggestNum;
//  }

function findGreatest(arr, x){ /// with .filter()
    return arr.filter((el => el >x))
}

console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30, 40, 50], 12)); 
console.log(findGreatest([0, 10, 3], 4));

function findOneBig(arr, y){   //with .find()
    return arr.find((elem => elem > y));
}
console.log(findOneBig([3, 4, 5], 4));
console.log(findOneBig([10, 20, 30, 40, 50], 12)); 
console.log(findOneBig([0, 10, 3], 4));


function reduceToOne(arr){ ///.reduce()
    return arr.reduce((acc,cur) => acc+cur/2)

}
console.log(reduceToOne([3, 4, 5]));
console.log(reduceToOne([10, 20, 30, 40, 50])); 
console.log(reduceToOne([0, 10, 3]));




console.log("Exercise 2:");

// **2. For the longest word.**
// Create a function to find the longest word in a given string. 

function longestWord(string){
    let stringSplit = string.split(" ");
    //console.log(stringSplit);
    let assumedLongestWord = stringSplit[0];
    for(let i = 0; i< stringSplit.length; i++){
        if(stringSplit[i].length > assumedLongestWord.length){
            assumedLongestWord = stringSplit[i];
        }
    } return assumedLongestWord;
}

console.log(longestWord("this is a web development course"));
// i.e. longestWord("this is a web development course") ➞  "development"

console.log("Exercise 3:");
// **3. Reverse.**
// Create a function to reverse a number. 

function reverseNum(num){
    return num.toString().split("").reverse().join("");

}
console.log(reverseNum(34532));
// i.e. reverse(34532) ➞ 23543

console.log("Exercise 4:");
// **4. AEIOU: Vowels.**
// Create a function that takes a string in its parameters and counts the number of vowels 
// (i.e. in English, "a, e, i, o, u") in the string. 

// i.e. findVowels("this is a string") ➞ 4

function findVowels(string){
    let vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;
    for(let i = 0;  i<string.length; i++){
        //console.log(string[i]);
        if(vowels.includes(string[i])){
            counter++;
        }
    }
    return counter;
}
console.log(findVowels("this is a string tralala"));


console.log("Exercise 5:");
// **5. Missing Number.**
// Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

console.log("-> my version :");  
// function missingNums(arr){
//     let sum1 = 0;
//     for(let i=1; i<=10; i++){
//         sum1+= i;  
//     }
//     let sum2 = arr.reduce((acc,cur) => acc+cur)
//     return sum1-sum2;
// }
// console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
// console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
// console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

function missingNums(arr){
    let sum1 = [1,2,3,4,5,6,7,8,9,10].reduce((acc, cur) => acc + cur)
    let sum2 = arr.reduce((acc,cur) => acc+cur)
    return sum1-sum2;
}

console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

console.log("-> from Kevin :");            //from Kevin
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function missingNums(arr) {
  let newArray = 0;
  for (let i = 1; i < 11; i++) {
    if (!arr.includes(i)) {
      newArray = i;
    }
  }
  return newArray;
}
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));


console.log("-> Claudinei :");  
function missingNums(arr){                   //from Claudinei
for (let i = 1; i <= 10; i++) {
    if(arr.indexOf(i) == -1) {
      return i;
    }
    }
}
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));


// Examples: 
// * missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// * missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// * missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7 

console.log("Exercise 6:");
// **6. Cubed.**
// Create a function that takes in an array of numbers and returns the sum of its cubes. 


function sumOfCubes(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        let numberCubes = Math.pow(arr[i],3);
        sum += numberCubes;
    }return sum;
}

console.log(sumOfCubes([1, 5, 9])); // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
console.log(sumOfCubes([2])) ;
console.log(sumOfCubes([])) ;
// Examples: 
// * sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes([2]) ➞ 8
// * sumOfCubes([]) ➞ 0


console.log("Exercise 7:");
// **7. Dictionary.**
// Create a function that takes an initial string and an array of words, and returns a filtered array of the words 
// that start with the same letters as the initial string.

// Notes:
// * If none of the words match, return an empty array.
// * Keep the filtered array in the same relative order as the original array of words.

// Examples:
// * dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// * dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// * dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

function dictionary(str, arr){
    //console.log(arr)
    let newArr = [];
    for(let i = 0; i <arr.length; i++){
        if(arr[i].startsWith(str)){
            newArr.push(arr[i]);
        }
    } return newArr;

}

console.log(dictionary("bu", ["button", "breakfast", "border"]))
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]))
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]))

console.log("Exercise 8:");
// **8. Even Number Generator.**
// Create a function that finds all even numbers from 1 to the given number.
function evenNums(num){
    let array = [];
    for(let i=2; i<=num ; i+=2){
        if(i%2 === 0){
            array.push(i);
        }

    }return array;
}
console.log(evenNums(8));
console.log(evenNums(4)); 
console.log(evenNums(1));
// Examples:
// * evenNums(8) ➞ [2, 4, 6, 8]
// * evenNums(4) ➞ [2, 4]
// * evenNums(2) ➞ [2]
// **Notes:** 
// * If there are no even numbers, return an empty array. 
// * Do not include 0. 

console.log("Bonus:");
// **Bonus: Alphabetical Order.**
// Create a function to sort a string into alphabetical order. **NB:** assume numbers, symbols and punctuation are 
// not included in the string.

// i.e. alphaOrder("webdev") ➞ "bdeevw" 

function alphaOrder(str){
   
   return str.split("").sort().join("");

}

console.log(alphaOrder("webdev"));

// Finish these Functions

console.log("---1---")
/* This function should give us every second entry in an array.
for example: ["bees", "wasps", "spiders", "ants"] returns "wasps ants"
*/

const everySecondEntry = (arr) => {
    let result = ""
    for(let i = 0; i < arr.length; i++){
      if(i %2 ===1) {  // Edit This line
        result = result + " " + arr[i];
      }
    }
    return result ; // Edit this line
  }

const insects = ["bees", "wasps", "spiders", "ants"];

console.log(everySecondEntry(insects));


console.log("---2---");
/* This function should check if our array contains a specific element.
for example: ["milk", "eggs", "cheese", "butter"], "cheese" returns true
["milk", "eggs", "cheese", "butter"], "ham" returns false 
*/

const isElementInArray = (arr, element) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i].includes(element)) { //Edit this line
      return true; //Edit lthis line
    }
  }
  return false; 
}

const dairyProducts =  ["milk", "eggs", "cheese", "butter"];
console.log(isElementInArray(dairyProducts, "cheese")); //should return true
console.log(isElementInArray(dairyProducts, "ham")); //should return false



console.log("---3---");

/* This function should find the index of an element. */

const findIndex = (arr, element) => {
  for(let i = 0; i <= arr.length; i++){ //edit this line
    if(arr[i] === element){ //edit this line
      return i;
    }
  }
}

const kitchenItems = ["pan", "plate", "spoon", "mixer"];
console.log(findIndex(kitchenItems, "plate"));  //should return 1
console.log(findIndex(kitchenItems, "mixer"));  //should return 3


console.log("---4---");

/* This function should reverse an array. 
Example: [1, 2, 3, 4] returns [4, 3, 2, 1]*/


const reverseArray = (arr) => {
  let result = [];
  for(let i = arr.length-1; i >= 0; i--){ //Edit this line
    result.push(arr[i]);
  }
  return result; //Edit this line
}
let numbers = [1, 2, 3, 4];
console.log(reverseArray(numbers)); //should return [4, 3, 2, 1]


console.log("---5---");

/* This function should multiply all elements of the array by 3
Example: [2, 3, 5] returns [6, 9, 15] */

const multiplyByThree = (arr) => {
  let result = [];
  for(let i = 0; i <arr.length; i++){ //Edit this line
    result.push(arr[i]*3); //Edit this Line
  }
  return result ; //Edit This line
}

let numbers2 = [2, 3, 5];
console.log(multiplyByThree(numbers2)); //should return [6, 9, 15]


//  Extra:
//   1. Write a function that gives us the next 20 leap years. (Schaltjahre)


//If a year is not divisible by 4, or divisible by 100 but not by 400, then it's a common year.
function leapYears(...num) {
  //console.log(num);
  let yearNow = new Date().getFullYear();
  let resultLeap=[];
  let totalYears=[];
  for(let i=0; i<num.length; i++){
    totalYears.push(yearNow+num[i]);
   // console.log(totalYears)
}
  for(let j=0; j<totalYears.length; j++){
 if (totalYears[j]%4 == 0 || (totalYears[j]%100 !== 0 && totalYears[j]%400 == 0)){
  resultLeap.push(totalYears[j]);
     //console.log(totalYears[j]);
}
} return `${resultLeap} is a leap year`;
};

console.log(leapYears(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20));
console.log(leapYears(40));
console.log(leapYears(32));

//   2. Write a function that gives us the largest number in an array. Example: [2, 4, 10, -1] returns 10

const largestNumber =(arr)=>{
  let max=arr[0];
  //console.log(max);
  for(let i=0; i<arr.length; i++){
    //console.log(arr[i]);
     if(arr[i] > max){
       max = arr[i];
     }
  } return max;
}

console.log(largestNumber([2, 4, 10, -1]))

//   3. Write a function that gives us all numbers in an array added together. Example: [1, 2, 3] returns 6


const elementSum = (arr)=>{
  let sum = 0;
  for(let i = 0; i<arr.length;i++){
    sum+=arr[i];

  }return sum;
}

console.log(elementSum([1, 2, 3]));//6
console.log(elementSum([1, 2, 3, 4, 5])); //15
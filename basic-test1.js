// Test - Programming Basics
// Test Instructions
// Work from the index.js file provided in this repository.
// Follow all of the instructions below to complete the test. Important: Make sure that the names of your 
//variables/functions match the names in the instructions below.
// Remember to print all your solutions.
// Good luck!


// Conditional Algorithms
// 1. Los or New?
// Create a function named "nameOfCity". If a string begins with "Los" or "New", then print the full string. 
//If not, print "The city name does not begin with Los or New". Be careful of case sensitivity.


function nameOfCity(name){
    let lowerCase = name.toLowerCase();
    if(lowerCase.startsWith("los") ||lowerCase.startsWith("new")){
        return true;
    }else return "The city name does not begin with Los or New";

}
console.log(nameOfCity("Los Angeles"));
console.log(nameOfCity("los Angeles"));
console.log(nameOfCity("Berlin"))
console.log(nameOfCity("New York"))
console.log(nameOfCity("Iasi"))
// 2. isDivisible?
// Create a function named "isDivisible". The function should take an integer as an argument. If the integer is divisible 
//by 100, then return true. If not, return false. Examples: 1 ➞ false, 1000 ➞ true, 100 ➞ true.

function isDivisible(num){
    if(num %100 ===0){
        return true;
    }else return false;
}

console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(300));


// 3. Missing Angle
// Create a function named "missingAngle" which classifies the missing angle of a triangle as either acute, right or obtuse.
// Notes: An acute angle is smaller than 90°, a right angle is exactly 90° and an obtuse angle is greater than 90° 
//(but less than 180°).
// Examples:
// 11°, 20° should return "obtuse", since the missing angle would be 149°
// 27°, 59° ➞ The third angle is 94° so it is "obtuse"
// 135°, 11° ➞ The third angle is "acute"
// 45°, 45° ➞ The third angle is a "right angle"
const missingAngle=(angle1,angle2)=>{
    let sumOfAngles = angle1+angle2;
    let result = 180-sumOfAngles;
    if(result > 90){
        return `${result} is obtuse`;
    }else if(result === 90){
        return `${result} is right`;
    }else if (result < 90){
        return `${result} is acute`
    }
    }

console.log(missingAngle(11, 20));
console.log(missingAngle(27, 59));
console.log(missingAngle(135, 11));
console.log(missingAngle(45, 45));

// 4. What's the weather?
// Use a ternary operator to complete this task. Create a function named "isRaining". If true, print 
//"wet day - you need an umbrella". If false, print "dry day - leave your umbrella at home".

function isRaining(question){
    isTrue =  question ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home";
    return isTrue;
}

console.log(isRaining(false));
console.log(isRaining(true));



// Loops
// 1. Sequence
// Create a function named "geometricalSequence" and use a loop to print the following sequence: 1 2 4 8 16 32 64 128 256. 
//Concatenate each value to a string and return a string.

const geometricalSequence = () => {

    for (i = 0; i < 9; i++) {
        console.log(Math.pow(2, i)+ " ");
    }
}
geometricalSequence();


// 2. Multiples
// Create a function named "multiplesOfThree" and use a loop to print the first five multiples of three: 3 6 9 12 15. 
//Concatenate each value to a string and return a string.
// Math

// 1. You've got the power
// Create a function named "powerOf" which takes an integer as an argument and returns the integer to the power of itself. 
//You should use a Math Object to make the calculation.
// Examples:

//   powerOf(3) //27
//   powerOf(4) //256
// Problem Solving


// 1. How many?
// Create a function named "vowelCount" that accepts a string as an argument. Check how many vowels the string contains, 
//if any. Return the vowel count of the string.
// Examples:

// vowelCount("hello") // 2
// vowelCount("test") // 1
// vowelCount("fbw") // 0


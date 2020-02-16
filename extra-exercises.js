// Fill in the Array with the missing numbers..

// const GIVEN_NUMBERS = [2,5,6,9,23,40,27,34,3,0]
// Consider 40 the bigger number in the Array.
console.log("-> v. Simona :");
function missingNums(arr) {
  //my version
  let missing = [];
  for (let i = 0; i < Math.max(...arr); i++) {
    if (arr.includes(i) == false) {
      missing.push(i);
    } else {
      continue;
    }
  }
  return missing;
}
console.log(missingNums([2, 5, 6, 9, 23, 40, 27, 34, 3, 0, 50]));

console.log("-> v. Claudinei :");
const numbers = [2, 5, 6, 9, 23, 40, 27, 34, 3, 0, 60];
const missingNums2 = arr => {
  //Claudinei
  let maxNumber = Math.max(...arr);
  let missing = [];
  for (let i = 0; i < maxNumber; i++) {
    if (!arr.includes(i)) missing.push(i);
  }
  return missing;
};
console.log(missingNums2(numbers));

// Write a function that takes in a string and for each character, returns the distance to the nearest vowel.
// If the character is a vowel itself, return 0.
// Examples
// distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]
// distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]
// distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]
// distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
// Notes
// All input strings will contain at least one vowel.
// Strings will be lowercased.
// Vowels are: a, e, i, o, u.

// * Apples and Bananas
//  *
//  *  Write a function, .vreplace() that replacing all vowels in a string with a specified vowel.
//  *
//  *  Examples
//  * "apples and bananas".vreplace("u") ➞ "upplus und bununus"
//  * "cheese casserole".vreplace("o") ➞ "chooso cossorolo"
//  * "stuffed jalapeno poppers".vreplace("e") ➞ "steffed jelepene peppers"

function vreplace(str, vowel) {
  return str.replace(/[aeiou]/gi, vowel);
}
console.log(vreplace("apples and bananas", "u"));
console.log(vreplace("cheese casserole", "o"));
console.log(vreplace("stuffed jalapeno poppers", "e"));



//Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). 
//The function looks like:
// findBrokenKeys(correct phrase, what you actually typed)
// Notes
// Broken keys should be ordered by when they first appear in the sentence.
// Only one broken key per letter should be listed.
// Letters will all be in lower case.
// Examples
// findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]
// findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]
// findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]

function findBrokenKeys(correct, wrong) {   //my version
  let wrongLetters = [];
  for (let i = 0; i < wrong.length; i++) {
    if (!correct.includes(wrong[i])) {
      wrongLetters.push(correct[i]);
    }
  } return [... new Set(wrongLetters)];
}

// const findBrokenKeys = (correctArg, arg) => { //Kevin version 
//   let result = [];
//   for (let i = 0; i < correctArg.length; i++) {
//     if (arg[i] !== correctArg[i]) {
//       if (!result.includes(correctArg[i])) {
//         result.push(correctArg[i]);
//       }
//     }
//   }
//   return result;
// };

// function findBrokenKeys(str1, str2) { ///short version
// 	return [...new Set(str1.split("").filter((a, index) => a !== str2[index]))];
// }

console.log(findBrokenKeys("happy birthday", "hawwy birthday")); //p
console.log(findBrokenKeys("starry night", "starrq light")); //y n
console.log(findBrokenKeys("beethoven", "affthoif5")); //b e v n

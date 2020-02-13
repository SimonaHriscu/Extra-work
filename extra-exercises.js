// Fill in the Array with the missing numbers..

// const GIVEN_NUMBERS = [2,5,6,9,23,40,27,34,3,0]
// Consider 40 the bigger number in the Array.
console.log("-> v. Simona :"); 
function missingNums(arr) { //my version
    let missing = [];
    for (let i = 0; i<Math.max(...arr); i++) {
      if (arr.includes(i) == false) {
        missing.push(i);
      } else {
        continue;
      }
    }
    return missing;
  }
  console.log(missingNums([2,5,6,9,23,40,27,34,3,0,50]));

  console.log("-> v. Claudinei :"); 
  const numbers = [2, 5, 6, 9, 23, 40, 27, 34, 3, 0, 60];
  const missingNums2 = (arr) => { //Claudinei
    let maxNumber = Math.max(...arr);
    let missing = [];
    for (let i = 0; i < maxNumber; i++) {
      if (!arr.includes(i)) missing.push(i);
    }
    return missing;
  };
  console.log(missingNums2(numbers));

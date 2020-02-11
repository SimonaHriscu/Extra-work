
//1 1 1 2 2 2 3 3 3 4 4 4

let arr=[];
for(let i = 1; i<=4; i++){
    for(let m= 1; m<=4; m++)
    arr.push(i);
    
}console.log(arr);

console.log("Exercise 2:");

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
let arr2= [];
for(let i = 0; i<=4; i++){
    for(let m= 0; m<=4; m++)
    arr2.push(m);
}
console.log(arr2);
console.log(arr2.toString());
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

for(let i = 0; i<6; i++){
    let box2 = '';
    for(let j= 0; j < i; j++){
        box2+="@"
    }
    console.log(box2);
}


// 2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player 
//can earn from the tiles in their hand. 
//Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, 
//{ tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]

// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

function maxScore(arr){
  let arr2 = [];
  for(let i=0; i<arr.length; i++){
   arr.push(arr2[i]);
  }
 return (arr2[i]);
  
}

console.log( maxScore([ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 },
 { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]));
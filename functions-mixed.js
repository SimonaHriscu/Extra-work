// ### HTML Generator
// Write a function that generates some html tags for you. 

// #### Examples:
// "hello world", "p" -> &lt;p> hello world &lt;/p> 

// "title", "h" -> &lt;h1> title &lt;/h1>

// "bild1", "img" -> &lt;img src="bild1">


// ### Is it a number?

// Write a function that accepts a variable and returns true if the variable is a number and false if it isn't. 

// Tip: Use typeof 
function whatIsIt(num){
    if(typeof num == "number"){
        return true;
    }else{
        return false;
    }
}
console.log(whatIsIt(123));
console.log(whatIsIt(44.234));
console.log(whatIsIt("0#!23N"));
console.log(whatIsIt("3fdäü4a"));
// #### Examples:
// 123 -> true

// 44.234 -> true

// 0#!23N -> false

// 3fdäü4a -> false

// ### How often is a word in a string

// Write a function that accepts a sentence and a word. The function should return the number of times that word is 
// in a string.

// #### Examples: 

function howManyTimes(str, word){
    newStr = str.toLowerCase().split(" "); //split according to space;
    //console.log(newStr);
    let count = 0;
    for(i=0; i < newStr.length; i++){
        // console.log(newStr[i]);
         if(newStr[i] == word){    // or with .includes()
            count++;
        }

    }return count;

}

console.log(howManyTimes("The talk of the town", "the"));//2
console.log(howManyTimes("Coding is fun", "is"));//1
console.log(howManyTimes("hello hello hello how low?", "hello"));//3
console.log(howManyTimes("two plus two is four", "two"));//2
// "The talk of the town", "the" -> 2 

// "Coding is fun", "is" -> 1

// "hello hello hello how low?", "hello" -> 3

// Bonus:

// "two plus two is four", "two" -> 2 (case insensitive)



// ### Bonus: L33t Speak
// Back in the early 2000s, Kids on the internet used to talk like idiots. Write a function that accepts a word and 
// returns it as Leet Speak (https://de.wikipedia.org/wiki/Leetspeak)

// Replace the following letters as such:
 
function leetSpeak(word){
    let newWord = word.split("");
    //console.log(newWord);
    for(let i=0; i<newWord.length; i++){
        if(newWord[i] === "a"){
           newWord[i]="@";
        }
        if(newWord[i] === "e"){
            newWord[i]="3";
         }
         if(newWord[i] === "i"){
            newWord[i]="1";
         }
         if(newWord[i] === "s"){
            newWord[i]="5";
         }
         if(newWord[i] === "o"){
            newWord[i]="0";
         }

    } return newWord.join("");

}

console.log(leetSpeak("Niels"));
console.log(leetSpeak("Day"));
console.log(leetSpeak("One"));

// "a" becomes "@"

// "e" becomes 3

// "i" becomes 1

// "s" becomes 5

// "o" becomes 0

// #### Examples:

// "Niels" -> "N13l5"

// "Day" -> "D@y"

// "One" -> "0n3"

// ### Bonus Magic Square:
// A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15. 
// Here's an example:

// 8 1 6

// 3 5 7

// 4 9 2

// The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4. 


// #### Examples: 
// [8, 1, 6, 3, 5, 7, 4, 9, 2] -> true

// [2, 7, 6, 9, 5, 1, 4, 3, 8] -> true

// [3, 5, 7, 8, 1, 6, 4, 9, 2] -> false

// [8, 1, 6, 7, 5, 3, 4, 9, 2] -> false


// ### Bonus Tetris:
// The pieces you are given in a game of Tetris are not randomly selected. Instead, all seven pieces are placed into a "bag." 
// A piece is randomly removed from the bag and presented to the player until the bag is empty. When the bag is empty,
// it is refilled and the process is repeated for any additional pieces that are needed.

// In this way, it is assured that the player will never go too long without seeing a particular piece. 

// The pieces are as follows:

// O, I, S, Z, L, J, T


// #### Task:
// Output a string signifying 50 tetromino pieces given to the player using the random bag system. 

// #### Examples:
// LJOZISTTLOSZIJOSTJZILLTZISJOOJSIZLTZISOJTLIOJLTSZO

// OTJZSILILTZJOSOSIZTJLITZOJLSLZISTOJZTSIOJLZOSILJTS

// ITJLZOSILJZSOTTJLOSIZIOLTZSJOLSJZITOZTLJISTLSZOIJO

// They do not need to be in one line.

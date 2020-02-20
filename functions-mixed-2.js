// Mixed Exercise

console.log("-----> The bigger num")
// 1. Which number is bigger
// Write a function named greaterNum that takes 2 arguments, both numbers. It should return the bigger (higher) number.

// Examples:
// greaterNum(2,3) -> 3
// greaterNum(-3, 0) -> 0
// greaterNum(200,1) -> 200

function greaterNum(num1, num2){
    return Math.max(num1,num2);

}
console.log(greaterNum(2,3));
console.log(greaterNum(-3, 0)); 
console.log(greaterNum(200,1));

console.log("-----> The translator")
// 2. Word Translator
// Write a function named helloWorld that takes 1 argument, a language code (e.g. "es", "de", "en") and returns 
//"Hello, World" for the given language, for at least 3 languages. It should default to returning English.

// Examples:
// helloWorld("en") -> "Hello World!"
// helloWorld("de") -> "Hallo Welt!"
// helloWorld() -> "Hello World!"

const helloWorld=(code= "en")=>{
    switch (code) {
        case 1: "en"
        answer= "Hello World!";
        break;

        case 2: "de"
        answer= "Ola Mundo!";
        break;

        case 3: "es"
        answer= "Hallo Welt!";
        break;
        
    } return code;


}
console.log(helloWorld("en"));
console.log(helloWorld("de"));
console.log(helloWorld("es"));
console.log(helloWorld());

// 3. The Grade Assigner
// Write a function named assignGrade that takes a number score and returns a grade for the score, 
//either "A", "B", "C", "D", or "F".

// Examples:
// assignGrade(100) -> "A"
// assignGrade(89) -> "B"
// assignGrade(76) -> "C"
// assignGrade(56) -> "D"
// assignGrade(409 -> "E"
// assignGrade(20) -> "F"
console.log("-----> The pluraliser")
// 4. The Pluralizer
// Write a function named pluralize that takes a noun and a number and returns the name and number in pluralized form.

// Examples:
// pluralize(3, "cat") -> "3 cats"
// pluralize(5, "dog") -> "5 dogs"
// pluralize(2, "table") -> "2 tables"

const pluralize = (num, str)=>{
    if(num>1){
        return str+"s"
    }else return str;
}

console.log(pluralize(1, "cat"));
console.log(pluralize(5, "dog"));
console.log(pluralize(2, "table"));


// 5. FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where 
//all occurences of its first character have been replaced with '*', except for the first character itself.

// Examples:
// fixStart("babble") -> "ba**le"
// fixStart("people") -> "peo*le"
// fixStart("nonsense") -> "no*se*se"

const fixStart = (string) => {
    const array = string.split("");
    for (let i = 1; i < array.length; i++) {
      letter = array[0];
      array[i] = array[i].replace(letter, "*");
    }
    return array.join("");
  };
  console.log(fixStart("babble"));
  console.log(fixStart("people"));
  console.log(fixStart("nonsense"));

// const fixStart = str => {
//     let splitString = str.split("");
//     let firstChar = splitString[0];
//     let restChar = splitString.slice(1, splitString.length);
//     for (let i = 0; i < splitString.length; i++)
//       if (restChar[i] == firstChar) {
//         restChar[i] = "*";
//       }
//     return firstChar + restChar.join("");
//   };
  
// console.log(fixStart("babble")) ;
// console.log(fixStart("people")) ;
// console.log(fixStart("nonsense"));


//////////////////////////////////////////////////////////////////
 



    // 6. Not Bad
// Create a function called notBad that takes a single argument, a string. It should find the first appearance of the 
//substring 'not' and 'bad'. If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring 
//with 'good' and return the result. If it doesn't find 'not' and 'bad' in the right sequence (or at all), 
//just return the original sentence.

// Examples:
// notBad('This dinner is not that bad!') -> 'This dinner is good!'

// notBad('This movie is not so bad!') -> 'This movie is good!'

// notBad('This dinner is bad!') -> 'This dinner is bad!'
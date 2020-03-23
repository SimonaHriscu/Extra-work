// 1. Return only numbers greater than 20 from the array.
let numbers = [10, 20, 30, 40];

const onlyGreaterThanTwenty = (numberArray) => {
  return numberArray.filter(elem=>elem>20);
}

console.log(onlyGreaterThanTwenty(numbers));
// [30, 40]

// 2. Return only countries that start with i
let countries = ["iceland", "germany", "switzerland", "ireland"];

const onlyCountriesWithI = (countryArray) => {
  return countryArray.filter(elem=>elem[0] === "i")
}
console.log(onlyCountriesWithI(countries));
// ["iceland", "ireland"]


// 3. Return only cities with a population greater than 3 million.
let cities = [
  { name: 'Los Angeles', population: 3792621 },
  { name: 'New York', population: 8175133 },
  { name: 'Chicago', population: 2695598 },
  { name: 'Houston', population: 2099451 },
  { name: 'Philadelphia', population: 1526006 }
];

const onlyGreaterThanThreeMillion = (cityArray) => {
  return cityArray.filter(elem=> elem.population > 3000000)
}

console.log(onlyGreaterThanThreeMillion(cities));
/*
[
  {name: 'Los Angeles', population: 3792621},
  {name: 'New York', population: 8175133},
]*/


// 4. Return an array only consisting of users who are superheroes
let users = [{ character: 'Superman', hero: true },
{ character: 'Sinestro', hero: false },
{ character: 'Wonder Woman', hero: true },
{ character: 'Lex Luthor', hero: false },
{ character: 'Ares', hero: false },
{ character: 'Green Lantern', hero: true }];

const onlyHeroes = (userArray) => {
  return userArray.filter(elem=> elem.hero === true)
}

console.log(onlyHeroes(users));
/* [{ character: 'Superman', hero: true },
    { character: 'Wonder Woman', hero: true },
    { character: 'Green Lantern', hero: true }] */

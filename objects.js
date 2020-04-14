console.log("**** Exercise 1")

// Create a function that takes an object argument sizes (contains width, length, height keys) 
// and returns the volume of the box.

// Examples
// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

function volumeOfBox(sizes) {
    sum = sizes.width *sizes.length*sizes.height
    return sum;
}

console.log(volumeOfBox({ width: 2, length: 5, height: 1 })) 
console.log(volumeOfBox({ width: 4, length: 2, height: 2 }))
console.log(volumeOfBox({ width: 2, length: 3, height: 5 }))



console.log("**** Exercise 2")

// Given an object of people and their ages, return how old the people would be after n years have 
// passed. Use the absolute value of n.

function afterNYears(obj, n) {
      Object.keys(obj).forEach(elem=>{
          obj[elem] +=n;
      })
    return obj;    
  
}

console.log(afterNYears({
      "Joel" : 32, ///obj.Joel = 32
      "Fred" : 44,
      "Reginald" : 65,
      "Susan" : 33,
      "Julian" : 13
    }, 1));

console.log(afterNYears({
      "Baby" : 2,
      "Child" : 8,
      "Teenager" : 15,
      "Adult" : 25,
      "Elderly" : 71
    }, 19));

    console.log("**** Exercise 3")


// Take up to 10 minutes to write a function called makeStudentReport that takes a single argument, data. data is 
// an array of objects. Each object in the array represents a student and their letter grade for a course — 
// for example, {name: 'Johnny Robot', grade: 'C'}.

// makeStudentReport should return an array of strings. For each item in data, return a string that looks like this:
//  '[name]: [grade]'. The name and grade values on the student object should be substituted in.



function makeStudentsReportAlt(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`[${arr[i].name}] : [${arr[i].grade}]`);
  }
}
makeStudentsReportAlt(
    [{name: 'Johnny Robot', grade: 'C'},
     {name: 'Jenica', grade: 'B'},
     {name: 'Ionica', grade: 'A'}
    ]);



console.log("**** Exercise 4")

///How to sort objects in an Array

let studentsInfo = [
    {name: 'Johnny Robot', grade: 'C'},
    {name: 'Jenica', grade: 'B'},
    {name: 'Ionica', grade: 'C'}
];

let cGrades = studentsInfo.filter(function(student){
    return student.grade === "C"
})
console.log(cGrades);
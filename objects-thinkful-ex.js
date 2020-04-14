console.log("**** Exercise 1")
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



console.log("**** Exercise 2")


// Enroll in summer school
// Take up to 10 minutes to write a function called enrollInSummerSchool that takes a single argument, students. students 
// is an array of objects, with each object representing a student — for example, {name: 'Tim', status: 'Current student', 
// course: 'Biology'}.

// enrollInSummerSchool should return an array of objects. For each object from the original array, it should return the 
// original name and course, but should update the status to In Summer school. So, given this input:

// [
//   {
//     name: 'Tim',
//     status: 'Current student',
//     course: 'Biology'
//   },
//   {
//     name: 'Sue',
//     status: 'Withdrawn',
//     course: 'Mathematics'
//   }
// ];
// ...the function should produce the following output:

// [
//   {
//     name: 'Tim',
//     status: 'In Summer school',
//     course: 'Biology'
//   },
//   {
//     name: 'Sue',
//     status: 'In Summer school',
//     course: 'Mathematics'
//   },
// ];

function enrollInSummerSchool(students) {
    for (let i = 0; i < students.length; i++) {
       students[i].status = 'In Summer school';
    //    console.log(students[i].status)
  }return students;
}

console.log(enrollInSummerSchool(
    [
        {
        name: 'Tim',
        status: 'Current student',
        course: 'Biology'
      },
      {
        name: 'Sue',
        status: 'Withdrawn',
        course: 'Mathematics'
      }
    ]));



console.log("**** Exercise 3")

// Find by id
// Spend up to 15 minutes writing a function called findById. This function takes 2 arguments, items and idNum. 
// items is an array of objects. idNum is the id we're trying to find in items. The function should look for an item 
// with the id idNum in the array items. If found, it should return that item.

// For example:

// const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];
// findById(data, 2) // should return {id: 2, foo: 'bizz'}

console.log("**** Exercise 4")
// Validate object keys
// Spend up to 20 minutes writing a function called validateKeys. This function takes 2 arguments, object and expectedKeys. 
// object is (you guessed it!) an object that we want to validate keys for. expectedKeys is an array of keys that we expect 
// to find on the object.

// validateKeys should return true if object has all of the keys from expectedKeys, and no additional keys. It should return 
// false if one or more of the expectedKeys is missing from the object, or if the object contains extra keys not in 
// expectedKeys.
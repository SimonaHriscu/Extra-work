// Create the following object:
// const student = { 
// firstName: "John", 
// lastName: "Smith", 
// class: 12 };

const student = new Object();
student.firstName  = "John";
student.lastName = "Smith";
student.class = 12;
console.log(student);
// Create a method that prints the following:
// "John smith is a student in class 12"
const student2 = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12,
    print(){
        console.log(`${this.firstName} ${this.lastName} is student in class ${this.class}`)
    } };

student2.print()

// Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data 
// from the object e.g. "John Smith is a 41 year old engineer living in France".
const person = {
    firstName: "John",
    lastName: "Smith",
    job: "engineer",
    age: 46,
    country: "france",
    personPrinter(){
        console.log(`${this.firstName} ${this.lastName} is a ${this.age} old ${this.job} living in ${this.country}.`);
    },
    getLength() {
        let length = 0;
        for(key in this){
            length++;
        }
        console.log(length);
    }
}
person.personPrinter();
person.getLength();

// Bonus
// Write a method to get the length of the person object.

// let length = Object.keys(person).length;
// console.log(length)
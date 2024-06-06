// const obj ={
//     key: value
// }

//concept of pass by reference
const person ={
    name: "Shisir",
    age: 22,
};

const anotherPerson = person;
anotherPerson.college = "asian"; 
//here anotherPerson and person points to the same location which allows both of them objects to access the contents inside them.


console.log(person === anotherPerson) //false
//content in the curly braces takes space in RAM due to which the value assigned with === is false.


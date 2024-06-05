/*function greet(name, phrase){
    phrase = phrase ?? "Hello"
    console.log(`hello ${name}`);
}*/

// function can be treated as a variable. can be assigned as a variable. can be passed as an aruguement. can be assigned to other function. can be called from other function.
//highorderfunction bhaneko bhitra as an arguement ma aru function call garda hunxa.

// function add(a,b){
//     return a + b;
// }

// greet("Shisir");

// let sayhi = function(){
//     console.log("Hello")
// }

// let sayhello = sayhi
// sayhi()
// sayhello()

//example of highorderfunction

// function highOrderFunc(callBackFunction){
//     callBackFunction();

//     let returnedFunc = function(){
//         console.log("test");
//     };
//     return test;
// }

// const returnedFunc = highOrderFunc();
// returnedFunc();

// arrow function

// let add = (a,b) => {
//     return a + b;
// }

// let add = (a,b) => a + b;

// let sayheloo = name => {
//     console.log(`heloo${name}`);
// };
// sayheloo()

// exercise

// let ask = (question, yes, no) =>{
//     if(confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do You Agree?",
//     () => alert("You Agreed."),
//     () => alert("You canceled the execution.")
// );

const person = {
    name : "Shisir",
    age : 22,
    place : "Nepal",
}

delete person.age
person.name = "Shisir Thapa";
person.salary = 1000000;
console.log(person["name"])
console.log(person);
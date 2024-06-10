// const numbers = [2, 4, 10, 15]

// // let sum = 0;
// // for(element of numbers){
// //     sum += element;
// // }

// // console.log(sum);


// // let summation = 0;
// // for(let i = 0; i<numbers.length;i++){
// //     summation += numbers[i];
// // }
// // console.log(sum);


// //reduce
// // const total = numbers.reduce((prev,curr) =>{
// //     console.log({prev,curr})
// //     return prev + curr;
// // }, 0);

// // console.log({total});

// // const cart = [
// //     {name: "Laptop", price: 300},
// //     {name: "Phone", price: 300},
// //     {name: "Tablet", price: 300},
// //     {name: "Monitor", price: 300},
// // ]

// // const totalPrice = cart.reduce((total, product) => total + product.price, 0)
// // console.log({totalPrice}); //total price
// //constructor
// const person = {
//     name: "Shisir",
//     age: 22,
//     education: {
//     College: "KEC",
//     school: 'LFES',
// },
//     Profession: 'Student'
// };
// //= ko right ma ayo bhane spread operator bhanxa
// const anotherPerson ={
//     ...person,
//     education: {
//         ...person.education,
//     },
// };

// console.log(anotherPerson);
// anotherPerson.name = "Shisir Thapa";
// anotherPerson.education.school ="GEMS";
// console.log(anotherPerson);

// // const personName = person.name
// //= ko left ma ayo bhane rest operator bhanxa
// //destructor 
// const { name, age, education:{school} ,...remainingProps} = person;
// console.log({name, age, school});
// console.log(remainingProps);


// //let {name , age} = person
// function printPersonDetails(p){
//     //const {name, age} = person;
//     console.log(`Name: ${name}, Age:${age}`)
// }

// printPersonDetails(person);

// const digits = [10 , 20 , 30 , 40 , 50 , 60]
// const firstNum = digits[0]
// const secondNum = digits[1]

// const [first, second, ...remainingNums] = digits;
// console.log(first, second, remainingNums);

// function test(...v){
//     console.log(v)
// }

// test(10 , 20 , 30)

const person = {
    name: 'Riya',
    age: 23,
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

for (let [key,value] of Object.entries(person)){
    console.log(`${key} : ${value}`);
};


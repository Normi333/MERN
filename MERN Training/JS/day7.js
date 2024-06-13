//prototype

// const person = {
//     name: 'Shisir',
//     age: 22,
//     sayhello(){
//         console.log("Hellooooo!")
//     },
// };

// console.log(person)
// console.log(person.hasOwnProperty("name"))
// // console.log(person.sayhello())

// const animal = {
//     noOfLegs: 4,
// }

// animal.__proto__ = person;

// console.log(animal);

//prototype chaining
//first checks the object to which prototype has been assigned and if that object doesn't contain proto then checks within themselves i.e[prototype] = object

// console.log(animal.age);
// console.log(animal.hasOwnProperty('noOfLegs'))

//function constructor

function Person(name,age){
    this.name = name;
    this.age = age;

    // this.sayHello = () => console.log("Hello!"); esle chahi memory dher khanxa tei bhayera we don't do this here
}

Person.prototype.sayHello = function(){
    console.log("hello!");
}

const shisir = new Person("Shisir", 22);
shisir.sayHello();

const raku = new Person('Raku', 23);
raku.sayHello();

console.log(shisir);
console.log(raku);
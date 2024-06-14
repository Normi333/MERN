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

// function Person(name,age){
//     //this = {}
//     this.name = name;
//     this.age = age;
//     //return {};
//     // this.sayHello = () => console.log("Hello!"); esle chahi memory dher khanxa tei bhayera we don't do this here
// }

// Person.prototype.sayHello = function(){
//     // console.log("hello!");
//     console.log(this);
// }

// const shisir = new Person("Shisir", 22);
// shisir.sayHello();

// const raku = new Person('Raku', 23);
// raku.sayHello();

// console.log(shisir);
// console.log(raku);

// function Student(name, age, school){
//     //this = {}
//     Person.call(this, name, age)
//     this.school = school;
//     //this
// }

// Object.setPrototypeOf(Student.prototype, Person.prototype)

// Student.prototype.getSchool = function(){
//     console.log(this.school);
// };

// const riya = new Student('Riya', 23, 'blaa')
// riya.sayHello();
// riya.getSchool();

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     sayHello(){
//         console.log(`${this.name}:Hello`);
//     }
// };

// class Student extends Person{
//     constructor(name, age, school){
//         super(name, age); // Person.call(this, name, age)
//         this.school = school;
//     }

//     getSchool(){
//         console.log(this.school);
//     }
// };

// const shisir = new Student('Shisir', 22, 'LFES')
// shisir.sayHello()
// console.log(shisir);


//classwork

class Book{
    #title;
    #author;
    #genre;
    #pages;
    constructor(title,author,genre,pages){
        this.#title = title;
        this.#author = author;
        this.#genre = genre;
        this.#pages = pages;
    }

    displayInfo(){
        console.log(`${this.#title}, ${this.#author}`)
    }
}
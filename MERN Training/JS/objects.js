// const obj ={
//     key: value
// }

//1.concept of pass by reference
//2.
// console.log(this);//window
// const person ={
//     name: "Shisir",
//     age: 22,
//     fruits:{
//         apple: 1,
//         mango: 2,
//         watermelon: 3,
//     },
//     subjects: ["C","DSA"],
//     greetArrow: () =>{
//         console.log("ArrowFunc");
//         console.log(this); //window
//     },
//     greet: function(){
//         console.log(this); //person
//         const anotherArrow = () =>{
//          console.log("Another Arrow inside Normal Func");
//          console.log(this); //person
//         };
//         anotherArrow();
//         console.log(this);
//     },
// };
// person.greet();
// person.greetArrow();

// console.log(person.fruits.watermelon);
// console.log(person.fruits.mango);
// console.log(person.vegetables?.tomato ?? "No tomato");
// console.log(person.subjects);



// const anotherPerson = person;
// anotherPerson.college = "asian"; 
//here anotherPerson and person points to the same location which allows both of them objects to access the contents inside them.


//console.log(person === anotherPerson) //false
//content in the curly braces takes space in RAM due to which the value assigned with === is false.

// function test(p){
//     p.age = "test"
//     p.school = 'jadsflksjflka'
// }

// test(person)

// console.log(person)



// let string = prompt('What type of data do you want?');
// alert(person[string]);
// const personKey = prompt('k herne?')
// const result = person[personKey] ?? "Invalid Data";
// console.log(result);


//loop in objects in objects  = in
// for (const key in person){
//     console.log(key, person[key]);
// }

//while condition
const student ={}
while(1){
    const key = prompt("Enter Student's Key");
    if (key == 'exit'){
        break;
    }
    const value = prompt("Enter Student's Value");
    student[key] = value;
}
console.log(student);

//recurrsion
function enter(){
    const key=prompt("Enter student key");
    if(key === 'exit')
        return 0;
    const value=prompt("Enter student value");
    student[key]=value;

    enter();
}

enter();
console.log(student);




// const arr = [1,2,3,4,5]
// const arr = new Array();
// arr[0] = 1;
// arr[1] = 2;
// console.log(arr);

//loops in array (for of) 

const names = ["Shisir","Rakesh","Riya"]

const greet = (name) => console.log(`hello, ${name}`)
names.forEach(greet, index =>{
    console.log(`hello, ${names}`, index)
});

//map -> same size but modify the elements

const numbers = [1, 2, 5, 32, 8]
const doubleNumbers = numbers.map((number) => {
    return number * 2;
});

console.log("Double", doubleNumbers);

//filter -> extracts elements out of the array

const numbersGreaterThan30 = numbers.filter((number) => {
    return number > 30;
});

console.log("Greater Than 30", numbersGreaterThan30);

//greet(for every array)

// names[0] = "Shisir Thapa" //adding in the array

// //works like stack last ko index bata hatauxa-halxa
// names.push("Nirjey");
// // names.pop();

// names.unshift("Prajeena"); //adds like push pop but is slow because it has to push every other array in the list.

// for(let name of names){
//     console.log(name);
// }

// //for printing the last in the array
// console.log(names[names.length -1])
// //best method for displaying the last in the array
// console.log("last_Name", names.at(-1))

// //exercise Square matrix



// matrix = [[9, 13, 5, 2], [1, 11, 7, 6], [3, 7 , 4 , 1], [6, 0, 7, 10]]
// for (let row of matrix){
//     console.log(row);
// }
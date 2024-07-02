const tasks =["learn html", "learn js", "learn everything"];

let string=""
for (task of tasks){
    task_str= `<li>${task} <button>delete</button></li>`;
    string += task_str;
}

const ul = document.querySelector('ul');
ul.innerHTML= string;

//selecting elements
const elementByID= document.getElementById('title');
console.log("Element by ID");
console.log(elementByID.innerText); //logs the <h1> element

const elementByClass= document.getElementsByClassName('para');
console.log("Element by class");
console.log(elementByClass[0].innerText); //logs live HTMLcollection of elements with class para

const elementByTag= document.getElementsByTagName('p');
console.log("Element by tag");
console.log(`${elementByTag[0].innerText}\n${elementByTag[1].innerText}`); //logs live HTMLcollection of <p> elements

const firstParagraph= document.querySelector('p');
console.log("Element by querySelector");
console.log(firstParagraph.innerText); //logs first <p> element

const allParagraph= document.querySelectorAll('p');
console.log("Element by querySelectorAll");
console.log(allParagraph[0].innerText);
console.log(allParagraph[1].innerText);

//Task:
// In index.html file:
// 1. find 'ul' Element.
// 2. add 3 items to the list using innerHTML command.
// 3. with each element, there is a delete button.
// 4. when delete button is clicked, that element is removed from the list.

const tasks = ["learn html", "learn js", "learn everything"];

let string = "";
for (task of tasks) {
  task_str = `<li id=list${tasks.indexOf(
    task
  )}>${task} <button>delete</button></li>`;
  string += task_str;
}

const ul = document.getElementById("list");
ul.innerHTML = string;

const button = document.querySelector("button");
button.addEventListener('click', ()=>{
  button.parentElement.remove();
})

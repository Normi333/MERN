//Task:
// In index.html file:
// 1. find 'ul' Element.
// 2. add 3 items to the list using innerHTML command.
// 3. with each element, there is a delete button.
// 4. when delete button is clicked, that element is removed from the list.


//DOM Elements 
const form = document.querySelector('form');
const taskInputEl = document.getElementById("task");
const submitButtonEl = document.getElementById("submit");
const ul = document.querySelector('ul');
const parentUl = document.getElementById('ul');

let taskToBeEditedList = null;
let tasks = ["learn html", "learn js", "learn everything"];

// create, read, update, delete
function addTask(task){
  let ul = document.getElementById('ul');
  let li = document.createElement('li');
  li.innerHTML= `${task} <button>delete</button> <button>edit</button>`;
  ul.appendChild(li);
}

function readTask(){
  let string="";
  const deleteButton = " <button>delete</button> <button>edit</button></li>";
  for(t of tasks){
    str = `<li>${t}`.concat(deleteButton);
    string += str;
  }
  ul.innerHTML= string;
}

function updateTask(){
  const updateTaskValue = taskInputEl.value;
  taskToBeEditedList.innerHTML = `${updateTaskValue} <button>delete</button> <button>edit</button>`;
  form.reset();
  submitButtonEl.value = "Add";
  taskToBeEditedList = null;
}

function removeTask(index){
  tasks.splice(index,1);
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const task=document.querySelector('#task').value;
  if(taskToBeEditedList)updateTask();
  else addTask(task);
  document.getElementById('task').value=''; //documet.querySelector("form").reset()
})

parentUl.addEventListener('click', (e)=>{
  // console.log(e);
  const { tagName, textContent, parentElement } = e.target;
  if (tagName === "BUTTON" && textContent === "delete"){
    parentElement.remove();
  }

  if(tagName === "BUTTON" && textContent === "edit"){
    console.log(parentElement.textContent);

    // const taskToBeUpdated = parentElement.textContent.replace("edit","").replace("delete","");
    
    const taskToBeUpdated = parentElement.textContent.split(' ').slice(0,-2).join(' ');
    taskInputEl.value = taskToBeUpdated;
    document.getElementById("submit").value = "Update";
    taskToBeEditedList = parentElement;
  }
});
readTask();



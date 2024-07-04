localStorage.setItem('name','Shisir');
localStorage.setItem('age', 22);
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');

// localStorage.clear();


const todos = ["learn HTML", "learn CSS"];

localStorage.setItem('todos', JSON.stringify(todos));
const todosFromLS = localStorage.getItem('todos');
console.log(JSON.parse(todosFromLS));

//managed format for dom_task.js
// const form = document.querySelector('form');
// const tasks = JSON.parse(localStorage.getItem('todos')) ?? []; //null coleasing
// let taskToBeEdited = null;

// // Dom elements
// const taskFormEl = document.querySelector('form');
// const taskUlEl = document.getElementById('ul');
// const taskSubmitEl = document.getElementById('submit');
// const taskTaskEl = document.getElementById('task');


// // buttons to add
// const deleteButton = "<button>delete</button>";
// const editButton = "<button>edit</button>";


// // create, read, update, delete
// function addTask(){
//   const task = taskTaskEl.value;
//   let li = document.createElement('li');
//   li.dataset.index = tasks.length;
//   li.innerHTML= `${task} ${deleteButton} ${editButton}`;
//   taskUlEl.append(li);
//   taskFormEl.reset();
//   tasks.push(task);
//   localStorage.setItem('todos', JSON.stringify(tasks));
// }

// function readTask(){
//   let taskList="";
//   tasks.forEach((task, index)=>{
//     taskList += `<li data-index="${index}">${task} ${deleteButton} ${editButton}</li>`;
//   })
//   taskUlEl.innerHTML= taskList; 
// }


// function updateTask(){
//   const updateTaskValue = taskTaskEl.value;

//   //updating the task innerHTML
//   taskToBeEdited.innerHTML = `${updateTaskValue} ${deleteButton} ${editButton}`;
  
//   //reseting the form
//   taskFormEl.reset();

//   //reset update to add
//   taskSubmitEl.value = "Add";
//   taskToBeEdited = null;
// }


// function removeTask(task){
//     taskToRemove = task.split(' ').slice(0,-2).join(' ')
//     const indexOfTaskToRemove = tasks.indexOf(taskToRemove);
//     tasks.splice(indexOfTaskToRemove,1);
//     localStorage.setItem('todos', JSON.stringify(tasks));
// }



// //Event listeners
// form.addEventListener('submit', (e)=>{
//   e.preventDefault();
//   if(taskToBeEdited) updateTask();
//   else addTask();
// })


// taskUlEl.addEventListener('click', (e)=>{
// const {tagName, parentElement, textContent} = e.target;

//   if (tagName === "BUTTON"){
    
//     if(textContent === "delete"){
//       console.log(parentElement.dataset.index)
//       removeTask(parentElement.textContent);
//       parentElement.remove();
//     }
    
//     if(textContent === "edit"){
//       // const taskToBeUpdated = e.target.parentElement.textContent.replace("edit", "").replace("delete", "");
//       const taskToBeUpdated = parentElement.textContent.split(' ').slice(0,-2).join(' ');  
//       document.taskTaskEl.value= taskToBeUpdated;
//       taskSubmitEl.value = 'Update';
//       taskToBeEdited = parentElement;
//     }
//   }
// })
// readTask();
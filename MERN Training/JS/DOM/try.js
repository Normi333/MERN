// const form = document.querySelector("form");
// const taskInputEl = document.getElementById("task");
// const submitButtonEl = document.getElementById("submit");
// const ul = document.querySelector("ul");
// const searchInputEl = document.getElementById("search");
// const searchForm = document.querySelectorAll("form")[1]; // Assuming the search form is the second form

// let taskToBeEditedList = null;
// const tasks = JSON.parse(localStorage.getItem("todos")) ?? [];

// // create, read, update, delete
// const addTask = () => {
//   const newTask = taskInputEl.value;
//   tasks.push(newTask);
//   localStorage.setItem("todos", JSON.stringify(tasks));
//   renderTasks(tasks);
//   form.reset();
// };

// const renderTasks = (taskList) => {
//   ul.innerHTML = "";
//   taskList.forEach((task, index) => {
//     const list = document.createElement("li");
//     list.dataset.index = index;
//     list.innerHTML = `${task} <button>delete</button> <button>edit</button>`;
//     ul.append(list);
//   });
// };

// const updateTask = () => {
//   const updateTaskValue = taskInputEl.value;
//   tasks[taskToBeEditedList.dataset.index] = updateTaskValue;
//   localStorage.setItem("todos", JSON.stringify(tasks));
//   renderTasks(tasks);
//   form.reset();
//   submitButtonEl.value = "Add";
//   taskToBeEditedList = null;
// };

// const filterTasks = (searchTerm) => {
//   const filteredTasks = tasks.filter(task => task.toLowerCase().includes(searchTerm.toLowerCase()));
//   renderTasks(filteredTasks);
// };

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (taskToBeEditedList) updateTask();
//   else addTask();
// });

// ul.addEventListener("click", (e) => {
//   const { tagName, textContent, parentElement } = e.target;
//   const index = parentElement.dataset.index;
//   if (tagName === "BUTTON" && textContent === "delete") {
//     tasks.splice(index, 1);
//     localStorage.setItem("todos", JSON.stringify(tasks));
//     renderTasks(tasks);
//   } else if (tagName === "BUTTON" && textContent === "edit") {
//     taskInputEl.value = tasks[index];
//     submitButtonEl.value = "Update";
//     taskToBeEditedList = parentElement;
//   }
// });

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   filterTasks(searchInputEl.value);
// });

// renderTasks(tasks);

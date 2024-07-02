const ul = document.querySelector("ul");
console.log(ul);

ul.innerHTML = "<li> test </li> <li> another </li>";

const form = document.querySelector("form");

// document.getElementById("body").addEventListener("click", (e) => {
//   console.log("any where in the body");
//   console.log(e);
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("input").value;
  alert(username);
});

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  console.log(e);
  alert("halla garxes");
});

const tasks = ["learn html", "learn css", "learn php"];

//create, read, update, delete

function deleteTask(indexToBeDeleted){
    tasks.splice(indexToBeDeleted, 1);
};
function updateTask(index, task){
    tasks[index] = task;
};
function addTask(task){
    tasks.push(task);
};
function readTask(){
    tasks.forEach((task)=>{
        console.log(task);
    });
};

addTask("learn Java")
addTask("learn Laravel")
readTask();
deleteTask(4);
readTask();
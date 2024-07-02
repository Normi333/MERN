//Task:
// In index.html file:
// 1. find 'ul' Element.
// 2. add 3 items to the list using innerHTML command.
// 3. with each element, there is a delete button.
// 4. when delete button is clicked, that element is removed from the list.

const form = document.querySelector('form');
let tasks = ["learn html", "learn js", "learn everything"];
// create, read, update, delete
function addTask(task){
  let ul = document.getElementById('ul');
  let li = document.createElement('li');
  li.innerHTML= `${task}<button>delete</button>`;
  ul.appendChild(li);
}

function readTask(){
  let string="";
  const ul = document.querySelector('ul');
  for(t of tasks){
    str= `<li>${t}</li><button>delete</button>`;
    string += str;
  }
  ul.innerHTML= string;
}

function updateTask(index, task){
  tasks[index]=task;
}

function removeTask(index){
  tasks.splice(index,1);
}

//event listener

form.addEventListener('submit', (e)=>{
  alert("Added!");
  e.preventDefault();
  const newTask = document.getElementById("task").value;
  const list = document.createElement("li"); //<li><li>
  list.innerHTML = `${newTask}<button>delete</button>`; //<li>Learn Java</li>
  document.querySelector("ul").append(list);
  document.querySelector("form").reset();
  //document.getElementById("task").value="";
})

readTask();

const parentUI = document.querySelector('ul');

parentUI.addEventListener('click',(e) => {
  alert("Deleted!");
  if(e.target.tagName === 'BUTTON'){
      e.target.parentElement.remove()
    }
})



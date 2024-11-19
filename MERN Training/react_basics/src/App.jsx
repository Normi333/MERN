import { useState } from "react";
import "./App.css";

function App(){
  const[indexToBeEdited, setIndexToBeEdited] = (null);
  const [newTodo, setNewTodo] = useState("");
  const[todos, setTodos]=useState(["Learn Html","Learn CSS"]);

  const handleAdd = () => {
    if(indexToBeEdited == null){
      todos.push(newTodo);
    }else{
      todos[indexToBeEdited] = newTodo;
      setIndexToBeEdited(null);
    }
    setTodos([...todos]);
    setNewTodo("");
  };

  const handleChange = (e) =>{
    setNewTodo(e.target.value);
  };

  const handleDelete = (indexToBeDeleted) => {
    const UpdatedTodos = todos.filter(
    (todo, index) => index !== indexToBeDeleted
    );
    setTodos(UpdatedTodos);
  };
  
  return(
    <>
    <input value={newTodo} type="text" onChange={handleChange}/>
    <button onClick={handleAdd}>
      {indexToBeEdited == null ? "Add" : "Update"}
    </button>
    <ul>
      {todos.map((todo, index) =>{
        return(
          <li key={index}>
            {todo}<button onClick={()=> handleDelete(index)}>Delete</button>{""}
            <button 
              onClick={()=>{
                setIndexToBeEdited(index);
                setNewTodo(todos[index]);
            }}>
              Edit
            </button>
          </li>
        );
      })}
    </ul>
    </>
  );
}
export default App;
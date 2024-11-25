import { useState } from "react";
import "./App.css";

function App() {
  let [indexToBeEdited, setIndexToBeEdited] = useState(null);
  let [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(["learn html", "learn css"]);

  const handleAdd = () => {
    if (indexToBeEdited === null) {
      todos.push(newTodo);
    } else {
      todos[indexToBeEdited] = newTodo;
      setIndexToBeEdited(null);
    }
    setTodos([...todos]);
    setNewTodo("");
  };

  const handleDelete = (indexToBeDeleted) => {
    todos.splice(indexToBeDeleted, 1);
    setTodos([...todos]);
  };

  const handleEdit = (index) => {
    setIndexToBeEdited(index);
    setNewTodo(todos[index]);
  };

  return (
    <>
      <h1>TODO</h1>

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button onClick={handleAdd}>
        {indexToBeEdited === null ? "Add" : "Update"}
      </button>

      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <button onClick={() => handleDelete(index)}>delete</button>
              <button onClick={() => handleEdit(index)}>edit</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;

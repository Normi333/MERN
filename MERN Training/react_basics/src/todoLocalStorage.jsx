import { useState, useEffect } from "react";
import "./App.css";

const getTodoFromLocalStorage = () => {
  const todo = localStorage.getItem("todos");
  return JSON.parse(todo) ?? [];
};

// function Button({ label, onClick }) {}

function App() {
  let [indexToBeEdited, setIndexToBeEdited] = useState(null);
  let [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(getTodoFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">
          {indexToBeEdited === null ? "Add" : "Update"}
        </button>
      </form>

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

import { useState, useEffect } from "react";
import "./App.css";

const getTodoFromLocalStorage = () => {
  const todo = localStorage.getItem("todos");
  return JSON.parse(todo) ?? [];
};

const COLORS = {
  success: "darkgreen",
  error: "red",
};
function Button({ label, onClick, color }) {
  return (
    <button
      onClick={onClick}
      style={{
        color: "white",
        background: COLORS[color] ?? "blue",
        marginRight: "5px",
      }}
    >
      {label}
    </button>
  );
}

function TodoForm({ handleSubmit, newTodo, indexToBeEdited, handleChange }) {
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleChange} />
      <Button label={indexToBeEdited === null ? "Add" : "Update"} />
    </form>
  );
}
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

  const handleChange = (e) => setNewTodo(e.target.value);

  return (
    <>
      <h1>TODO</h1>
      <TodoForm
        handleSubmit={handleSubmit}
        newTodo={newTodo}
        handleChange={handleChange}
        indexToBeEdited={indexToBeEdited}
      />

      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <Button label="Delete" onClick={handleDelete} color="success" />
              <Button
                label="Edit"
                onClick={() => handleEdit(index)}
                color="error"
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;

import React, { useState } from "react";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 0,
      value: "Test todo element 1",
      isDone: false,
    },
  ]);

  const handleChange = (e) => {
    //Updates local component state
    setTodoValue(e.target.value);
  };

  const clearInput = () => {
    //Clear existing value in input
    document.getElementById("todoValueInput").value = "";
    //Update local component state
    setTodoValue("");
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length,
        value: todoValue,
        isDone: false,
      },
    ]);
    clearInput();
  };

  const setTodoAsDone = (id) => {
    const todosNew = [...todos];
    todosNew.map((t) => {
      if (t.id === id) {
        t.isDone = !t.isDone;
      }
      return t;
    });
    setTodos(todosNew);
  };

  return (
    <div className="app">
      <p className="title">Testing</p>
      <div className="inputDiv">
        <input
          type="input"
          id="todoValueInput"
          className="searchBar"
          onChange={(e) => handleChange(e)}
        />
        <button className="submitButton" onClick={() => addTodo()}>
          Add Task
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => setTodoAsDone(todo.id)}>
            {todo.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

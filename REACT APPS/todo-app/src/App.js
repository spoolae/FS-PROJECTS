import React from "react";
import "./App.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodoList } from "./hooks/useTodoList";

function App() {
  const [todos, addTodo, deleteTodo, toggleTodo] = useTodoList();

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;

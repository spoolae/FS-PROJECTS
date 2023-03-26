import React, { useState } from "react";
import "./App.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterSelector from "./components/FilterSelector";
import { useTodoList } from "./hooks/useTodoList";

function App() {
  const [todos, addTodo, deleteTodo, toggleTodo] = useTodoList();
  const [filter, setFilter] = useState("all");

  const filteredTodos =
    filter === "completed"
      ? todos.filter((todo) => todo.completed)
      : filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : todos;

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <FilterSelector filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;

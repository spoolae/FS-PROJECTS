import React from "react";

import "./App.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterSelector from "./components/FilterSelector";
import { useTodoList } from "./hooks/useTodoList";

function App() {
  const [filteredTodos, addTodo, deleteTodo, toggleTodo, filter, setFilter] =
    useTodoList();

  return (
    <div className="app">
      <h1>TODO LIST</h1>
      <TodoForm addTodo={addTodo} />
      <FilterSelector filter={filter} setFilter={setFilter} />
      <TodoList
        filteredTodos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;

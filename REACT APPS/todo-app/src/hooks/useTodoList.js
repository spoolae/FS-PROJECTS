import { useState } from "react";
import { v4 as uuid } from "uuid";

export const useTodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (task) => {
    setTodos([...todos, { id: uuid(), task, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "active") {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return [filteredTodos, addTodo, deleteTodo, toggleTodo, filter, setFilter];
};

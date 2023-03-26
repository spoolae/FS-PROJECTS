import React from "react";

const TodoItem = ({ todo, index, deleteTodo, toggleTodo }) => {
  const handleDelete = () => {
    deleteTodo(index);
  };

  const handleToggle = () => {
    toggleTodo(index);
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.task}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;

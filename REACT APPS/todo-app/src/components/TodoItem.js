import React from "react";

import { useTodoItem } from "../hooks/useTodoItem";

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  const {
    editing,
    taskText,
    handleEdit,
    handleSubmit,
    handleCancel,
    handleChange,
  } = useTodoItem(todo.task);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleTaskTextChange = (event) => {
    const updatedTodo = { ...todo, task: event.target.value };
    toggleTodo(todo.id, updatedTodo);
  };

  const editingItemContent = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={handleChange}
        onBlur={handleTaskTextChange}
        className="change-text"
      />
      <div className="buttons">
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );

  const defaultItemContent = (
    <>
      <span className={todo.completed ? "item-completed-text" : ""}>
        {todo.task}
      </span>
      <div className="buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );

  return (
    <li className="todo-item-container">
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {editing ? editingItemContent : defaultItemContent}
    </li>
  );
};

export default TodoItem;

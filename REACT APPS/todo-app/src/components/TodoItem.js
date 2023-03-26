import React, { useState } from "react";

const TodoItem = ({ todo, index, deleteTodo, toggleTodo }) => {
  const [editing, setEditing] = useState(false);
  const [taskText, setTaskText] = useState(todo.task);

  const handleDelete = () => {
    deleteTodo(index);
  };

  const handleToggle = () => {
    toggleTodo(index);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
    todo.task = taskText;
  };

  const handleCancel = () => {
    setEditing(false);
    setTaskText(todo.task);
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.task}
          </span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;

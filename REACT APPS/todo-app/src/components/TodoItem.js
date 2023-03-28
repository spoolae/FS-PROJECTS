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
    setTaskText(todo.task);
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
    <li className="todo-item-container">
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
            className="change-text"
          />
          <div className="buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <span className={todo.completed ? "item-completed-text" : ""}>
            {todo.task}
          </span>
          <div className="buttons">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;

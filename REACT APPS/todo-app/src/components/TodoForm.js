import React from "react";
import { useTodo } from "../hooks/useTodo";

const TodoForm = ({ addTodo }) => {
  const [values, handleChange, resetForm] = useTodo({ task: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(values.task);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        value={values.task}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;

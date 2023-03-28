import React from "react";

import useTodoForm from "../hooks/useTodoForm";

const TodoForm = ({ addTodo }) => {
  const formik = useTodoForm(addTodo);

  return (
    <form onSubmit={formik.handleSubmit} className="todo-form-container">
      <input
        type="text"
        name="task"
        placeholder="Write something..."
        value={formik.values.task}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={
          formik.touched.task && formik.errors.task
            ? "task-input invalid"
            : "task-input"
        }
      />
      <button type="submit">Add Task</button>
      <br />
      {formik.touched.task && formik.errors.task ? (
        <div className="error-msg">{formik.errors.task}</div>
      ) : null}
    </form>
  );
};

export default TodoForm;

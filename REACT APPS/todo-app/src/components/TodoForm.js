import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTodo } from "../hooks/useTodo";

const TodoForm = ({ addTodo }) => {
  const [values, handleChange, resetForm] = useTodo({ task: "" });

  const handleSubmit = (values, { resetForm }) => {
    addTodo(values.task);
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    task: Yup.string().required("Task is required"),
  });

  const formik = useFormik({
    initialValues: {
      task: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="task"
        value={formik.values.task}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <button type="submit">Add Task</button>
      {formik.touched.task && formik.errors.task ? (
        <div>{formik.errors.task}</div>
      ) : null}
    </form>
  );
};

export default TodoForm;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TodoForm = ({ addTodo }) => {
  const handleSubmit = (values, { resetForm }) => {
    addTodo(values.task);
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    task: Yup.string().required("Task is required"),
  });

  return (
    <Formik
      initialValues={{ task: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur, touched, errors }) => (
        <Form className="todo-form-container">
          <Field
            type="text"
            name="task"
            placeholder="Write something..."
            value={values.task}
            onChange={handleChange}
            onBlur={handleBlur}
            className="task-input"
          />
          <button type="submit">Add Task</button>
          <br />
          {touched.task && errors.task ? (
            <div className="error-msg">
              <ErrorMessage name="task" />
            </div>
          ) : null}
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;

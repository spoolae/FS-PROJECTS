import React from "react";
import { Field, Form, ErrorMessage } from "formik";

const RegisterForm = ({ isSubmitting }) => {
  return (
    <Form>
      <div>
        <Field type="text" name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" />
      </div>
      <div>
        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />
      </div>
      <div className="form-group">
        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />
      </div>
      <button type="submit" disabled={isSubmitting}>
        Register
      </button>
    </Form>
  );
};

export default RegisterForm;

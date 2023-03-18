import React from "react";
import { Field, Form, ErrorMessage } from "formik";

const LoginForm = ({ isSubmitting }) => {
  return (
    <Form>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" id="email" className="form-control" />
        <ErrorMessage name="email" component="div" className="error-message" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field
          type="password"
          name="password"
          id="password"
          className="form-control"
        />
        <ErrorMessage
          name="password"
          component="div"
          className="error-message"
        />
      </div>
      <button type="submit" disabled={isSubmitting} className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export default LoginForm;

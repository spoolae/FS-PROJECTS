import React from "react";
import { Field, Form, ErrorMessage } from "formik";

import style from "./LoginForm.module.scss";
import { Link } from "react-router-dom";

const LoginForm = ({ isSubmitting }) => {
  return (
    <Form>
      <div className="field-container">
        <Field type="text" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" className="error-msg" />
      </div>
      <div className="field-container">
        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" className="error-msg" />
      </div>
      <div className={style["remember-container"]}>
        <label htmlFor="remember-me">
          <Field type="checkbox" name="rememberMe" id="remember-me" />
          Remember me
        </label>
        <Link to="/forgot-password">Forgot password</Link>
      </div>
      <button type="submit" disabled={isSubmitting}>
        Login
      </button>
    </Form>
  );
};

export default LoginForm;

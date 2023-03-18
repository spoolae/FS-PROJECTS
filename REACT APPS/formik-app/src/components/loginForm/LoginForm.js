import React from "react";
import { Field, Form, ErrorMessage } from "formik";

import style from "./LoginForm.module.scss";

const LoginForm = ({ isSubmitting }) => {
  return (
    <Form>
      <div className="field-container">
        <Field name="email" placeholder="Email" validateOnChange={false} />
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
        <a href="/forgot-password">Forgot password</a>
      </div>
      <button type="submit" disabled={isSubmitting}>
        Login
      </button>
    </Form>
  );
};

export default LoginForm;

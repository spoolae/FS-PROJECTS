import React from "react";
import { Link } from "react-router-dom";
import { Field, Form, ErrorMessage } from "formik";
import classNames from "classnames";

import style from "./LoginForm.module.scss";

const LoginForm = ({ errors, touched }) => {
  const emailFieldClassNames = classNames({
    "invalid-input": !!errors.email && touched.email,
  });
  const passwordFieldClassNames = classNames({
    "invalid-input": !!errors.password && touched.password,
  });

  return (
    <Form>
      <div className="field-container">
        <Field
          type="text"
          name="email"
          placeholder="Email"
          className={emailFieldClassNames}
        />
        <ErrorMessage name="email" component="div" className="error-msg" />
      </div>
      <div className="field-container">
        <Field
          type="password"
          name="password"
          placeholder="Password"
          className={passwordFieldClassNames}
        />
        <ErrorMessage name="password" component="div" className="error-msg" />
      </div>
      <div className={style["remember-container"]}>
        <label htmlFor="remember-me">
          <Field type="checkbox" name="rememberMe" id="remember-me" />
          Remember me
        </label>
        <Link to="/forgot-password">Forgot password</Link>
      </div>
      <button type="submit">Login</button>
    </Form>
  );
};

export default LoginForm;

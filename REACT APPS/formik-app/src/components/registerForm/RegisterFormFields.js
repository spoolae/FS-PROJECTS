import React from "react";
import { Field, ErrorMessage } from "formik";

import style from "./RegisterForm.module.scss";

const RegisterFormFields = () => {
  return (
    <div className={style["form-columns"]}>
      <div>
        <div className="field-container">
          <Field
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="error-msg-left"
          />
        </div>
        <div className="field-container">
          <Field type="text" name="lastName" placeholder="Last Name" required />
          <ErrorMessage
            name="lastName"
            component="div"
            className="error-msg-left"
          />
        </div>
        <div className="field-container">
          <Field type="text" name="username" placeholder="Username" required />
          <ErrorMessage
            name="username"
            component="div"
            className="error-msg-left"
          />
        </div>
      </div>
      <div>
        <div className="field-container">
          <Field type="email" name="email" placeholder="Email" required />
          <ErrorMessage name="email" component="div" className="error-msg" />
        </div>
        <div className="field-container">
          <Field
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <ErrorMessage name="password" component="div" className="error-msg" />
        </div>
        <div className="field-container">
          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="error-msg"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterFormFields;

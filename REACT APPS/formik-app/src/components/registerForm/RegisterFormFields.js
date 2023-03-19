import React from "react";
import { Field, ErrorMessage } from "formik";
import classNames from "classnames";

import style from "./RegisterForm.module.scss";

const RegisterFormFields = ({ errors, touched }) => {
  const firstNameFieldClassNames = classNames({
    "invalid-input": !!errors.firstName && touched.firstName,
  });
  const lastNameFieldClassNames = classNames({
    "invalid-input": !!errors.lastName && touched.lastName,
  });
  const usernameFieldClassNames = classNames({
    "invalid-input": !!errors.username && touched.username,
  });
  const emailFieldClassNames = classNames({
    "invalid-input": !!errors.email && touched.email,
  });
  const passwordFieldClassNames = classNames({
    "invalid-input": !!errors.password && touched.password,
  });
  const confirmPasswordFieldClassNames = classNames({
    "invalid-input": !!errors.confirmPassword && touched.confirmPassword,
  });

  return (
    <div className={style["form-columns"]}>
      <div>
        <div className="field-container">
          <Field
            type="text"
            name="firstName"
            placeholder="First Name"
            className={firstNameFieldClassNames}
            required
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="error-msg-left"
          />
        </div>
        <div className="field-container">
          <Field
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={lastNameFieldClassNames}
            required
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="error-msg-left"
          />
        </div>
        <div className="field-container">
          <Field
            type="text"
            name="username"
            placeholder="Username"
            className={usernameFieldClassNames}
            required
          />
          <ErrorMessage
            name="username"
            component="div"
            className="error-msg-left"
          />
        </div>
      </div>
      <div>
        <div className="field-container">
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className={emailFieldClassNames}
            required
          />
          <ErrorMessage name="email" component="div" className="error-msg" />
        </div>
        <div className="field-container">
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className={passwordFieldClassNames}
            required
          />
          <ErrorMessage name="password" component="div" className="error-msg" />
        </div>
        <div className="field-container">
          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className={confirmPasswordFieldClassNames}
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

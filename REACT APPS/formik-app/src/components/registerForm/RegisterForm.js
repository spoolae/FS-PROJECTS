import React from "react";
import { Form } from "formik";

import style from "./RegisterForm.module.scss";
import RegisterFormFields from "./RegisterFormFields";

const RegisterForm = ({ isSubmitting }) => {
  return (
    <Form className={style["register-form"]}>
      <RegisterFormFields />
      <button type="submit" disabled={isSubmitting}>
        Create Account
      </button>
    </Form>
  );
};

export default RegisterForm;

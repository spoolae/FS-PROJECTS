import React from "react";
import { Form } from "formik";

import style from "./RegisterForm.module.scss";
import RegisterFormFields from "./RegisterFormFields";

const RegisterForm = ({ errors, touched }) => {
  return (
    <Form className={style["register-form"]}>
      <RegisterFormFields errors={errors} touched={touched} />
      <button type="submit">Create Account</button>
    </Form>
  );
};

export default RegisterForm;

import React from "react";
import { Form, Field } from "formik";
import * as Yup from "yup";

import style from "./RegisterForm.module.scss";
import RegisterFormFields from "./RegisterFormFields";

const RegisterForm = ({ errors, touched }) => {
  return (
    <Form className={style["register-form"]}>
      <RegisterFormFields errors={errors} touched={touched} />
      <div className={style["radio-container"]}>
        <label>
          <Field type="radio" name="userType" value="buyer" required />
          Join As a Buyer
        </label>
        <p>
          I am looking for a Name, Logo or Tagline for my business, brand or
          product
        </p>
      </div>
      <div className={style["radio-container"]}>
        <label>
          <Field type="radio" name="userType" value="seller" required />
          Join As a Marketplace Seller
        </label>
        <p>
          I am looking for a Name, Logo or Tagline for my business, brand or
          product
        </p>
      </div>
      <button type="submit">Create Account</button>
    </Form>
  );
};

export default RegisterForm;

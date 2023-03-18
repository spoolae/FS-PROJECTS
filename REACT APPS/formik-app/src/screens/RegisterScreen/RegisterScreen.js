import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import styles from "./RegisterScreen.module.scss";
import RegisterForm from "../../components/registerForm/RegisterForm";
import Header from "../../components/header/Header";

const RegisterScreen = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleFormSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("Required"),
    lastName: Yup.string()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("Required"),
    username: Yup.string()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .matches(
        /^[a-zA-Z0-9_-]*$/,
        "Username can only contain letters, numbers, underscores, and dashes"
      )
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Too short (6 chars minimum)")
      .max(20, "Too long (20 chars maximum)")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      )
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  return (
    <div className={styles["register-screen"]}>
      <Header />
      <div className="form-container">
        <h2>Create an account</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => <RegisterForm isSubmitting={isSubmitting} />}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterScreen;

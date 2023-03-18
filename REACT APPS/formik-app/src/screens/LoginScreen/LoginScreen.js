import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import styles from "./LoginScreen.module.scss";
import LoginForm from "../../components/loginForm/LoginForm";
import Header from "../../components/header/Header";

const LoginScreen = () => {
  const initialValues = { email: "", password: "" };

  const handleFormSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Too short (6 chars minimum)")
      .max(20, "Too long (20 chars maximum)")
      .required("Password is required"),
  });

  return (
    <div className={styles["login-screen"]}>
      <Header />
      <div className="form-container">
        <h2>Login to your account</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => <LoginForm isSubmitting={isSubmitting} />}
        </Formik>
      </div>
    </div>
  );
};

export default LoginScreen;

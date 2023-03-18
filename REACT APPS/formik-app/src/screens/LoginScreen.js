import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
  const initialValues = { email: "", password: "" };

  const handleFormSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <div className="login-screen">
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting }) => <LoginForm isSubmitting={isSubmitting} />}
      </Formik>
    </div>
  );
};

export default LoginScreen;

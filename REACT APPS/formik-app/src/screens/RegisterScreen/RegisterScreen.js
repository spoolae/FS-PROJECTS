import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import styles from "./RegisterScreen.module.scss";
import RegisterForm from "../../components/registerForm/RegisterForm";

const RegisterScreen = () => {
  const initialValues = { name: "", email: "", password: "" };

  const handleFormSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <div className={styles["register-screen"]}>
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

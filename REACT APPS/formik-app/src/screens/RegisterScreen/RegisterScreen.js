import React from "react";
import { Formik } from "formik";

import RegisterForm from "../../components/registerForm/RegisterForm";
import Header from "../../components/header/Header";
import { Link, useNavigate } from "react-router-dom";
import {
  initialValues,
  validationSchema,
} from "../../utils/RegisterScreen.utils";

const RegisterScreen = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (email) => {
    setTimeout(() => {
      navigate("/home", { state: { userEmail: email } });
    }, 800);
  };

  return (
    <div>
      <Header>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </Header>
      <div className="form-container">
        <div>
          <h2>Create an account</h2>
          <p>We always keep your name and email address private</p>
          <br />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleFormSubmit(values.email);
          }}
        >
          {({ errors, touched }) => (
            <RegisterForm errors={errors} touched={touched} />
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterScreen;

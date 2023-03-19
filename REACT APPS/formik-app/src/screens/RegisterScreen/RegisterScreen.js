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

  const propsToPass = {
    userEmail: "janedoe@example.com",
  };

  const handleFormSubmit = () => {
    setTimeout(() => {
      navigate("/home", { state: propsToPass });
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
        <h2>Create an account</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          <RegisterForm />
        </Formik>
      </div>
    </div>
  );
};

export default RegisterScreen;

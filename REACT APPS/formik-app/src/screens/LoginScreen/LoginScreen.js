import React from "react";
import { Formik } from "formik";

import LoginForm from "../../components/loginForm/LoginForm";
import Header from "../../components/header/Header";
import { Link, useNavigate } from "react-router-dom";
import { initialValues, validationSchema } from "../../utils/LoginScreen.utils";

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (email) => {
    setTimeout(() => {
      navigate("/home", { state: { userEmail: email } });
    }, 800);
  };

  return (
    <div>
      <Header>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </Header>
      <div className="form-container">
        <h2>Login to your account</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleFormSubmit(values.email);
          }}
        >
          {({ errors, touched }) => (
            <LoginForm errors={errors} touched={touched} />
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginScreen;

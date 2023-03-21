import React, { useContext } from "react";
import { Formik } from "formik";

import LoginForm from "../../components/loginForm/LoginForm";
import Header from "../../components/header/Header";
import { Link, useNavigate } from "react-router-dom";
import { initialValues, validationSchema } from "../../utils/LoginScreen.utils";
import { LocalizationContext } from "../../contexts/LocalizationContext";
import { loginTranslations } from "../../constants/translations";

const LoginScreen = () => {
  const navigate = useNavigate();

  const { locale } = useContext(LocalizationContext);

  const { h2 } = loginTranslations[locale];

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
        <h2>{h2}</h2>
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

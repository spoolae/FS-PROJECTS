import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import { errorTranslations } from "../../constants/translations";
import { LocalizationContext } from "../../contexts/LocalizationContext";

const ErrorScreen = () => {
  const { locale } = useContext(LocalizationContext);

  const { h1 } = errorTranslations[locale];

  return (
    <div>
      <Header>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </Header>
      <div className="form-container ">
        <h1>{h1}</h1>
      </div>
    </div>
  );
};

export default ErrorScreen;

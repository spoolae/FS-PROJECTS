import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/header/Header";
import { homeTranslations } from "../../constants/translations";
import { LocalizationContext } from "../../contexts/LocalizationContext";

const HomeScreen = () => {
  const location = useLocation();
  const { userEmail } = location.state || "";

  const { locale } = useContext(LocalizationContext);

  const { h1, greeting } = homeTranslations[locale];

  const Greeting = () => (
    <p>
      {greeting} <span>{userEmail}</span>
    </p>
  );

  return (
    <div>
      <Header>{userEmail ? <Greeting /> : null}</Header>
      <div className="form-container">
        <h1>{h1}</h1>
      </div>
    </div>
  );
};

export default HomeScreen;

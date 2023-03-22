import React from "react";
import { Link } from "react-router-dom";

import { LocalizationContext } from "../../contexts/LocalizationContext";
import logo from "../../images/logo.png";
import style from "./Header.module.scss";

const Header = ({ children }) => {
  const handleLanguageChange = (value) => {
    value.locale === "en" ? value.setLocale("ua") : value.setLocale("en");
  };

  return (
    <LocalizationContext.Consumer>
      {(value) => (
        <div className={style["header-component"]}>
          <Link to="/login">
            <img src={logo} alt="logo" />
          </Link>
          <div>
            {children}
            <button
              onClick={() => handleLanguageChange(value)}
              className={style["lang-button"]}
            >
              {value.locale === "en" ? "English" : "Українська"}
            </button>
          </div>
        </div>
      )}
    </LocalizationContext.Consumer>
  );
};

export default Header;

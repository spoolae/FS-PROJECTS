import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LocalizationContext } from "../../contexts/LocalizationContext";
import logo from "../../images/logo.png";
import style from "./Header.module.scss";

const Header = ({ children }) => {
  const { locale, setLocale } = useContext(LocalizationContext);

  const handleClick = () => {
    if (locale === "en") {
      setLocale("ua");
    } else {
      setLocale("en");
    }
  };

  return (
    <div className={style["header-component"]}>
      <Link to="/login">
        <img src={logo} alt="logo" />
      </Link>
      <div>
        {children}
        <button onClick={handleClick} className={style["lang-button"]}>
          {locale === "en" ? "English" : "Українська"}
        </button>
      </div>
    </div>
  );
};

export default Header;

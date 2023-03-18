import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./Header.module.scss";

const Header = ({ children }) => {
  return (
    <div className={styles["header-component"]}>
      <Link to="/login">
        <img src={logo} alt="logo" />
      </Link>
      {children}
    </div>
  );
};

export default Header;

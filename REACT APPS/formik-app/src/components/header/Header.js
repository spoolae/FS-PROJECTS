import React from "react";

import logo from "../../images/logo.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["header-component"]}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;

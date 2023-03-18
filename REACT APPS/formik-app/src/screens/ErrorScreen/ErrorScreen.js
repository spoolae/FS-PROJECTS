import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";

const ErrorScreen = () => {
  return (
    <div>
      <Header>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </Header>
      <div className="form-container ">
        <h1>Oops... Please, Back to Login Screen</h1>
      </div>
    </div>
  );
};

export default ErrorScreen;

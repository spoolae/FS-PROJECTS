import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/header/Header";

const HomeScreen = () => {
  const location = useLocation();
  const { userEmail } = location.state;

  const Greeting = () => (
    <p>
      Hello, <span>{userEmail}</span>
    </p>
  );

  return (
    <div>
      <Header>{userEmail ? <Greeting /> : null}</Header>
      <div className="form-container">
        <h1>This is home screen</h1>
      </div>
    </div>
  );
};

export default HomeScreen;

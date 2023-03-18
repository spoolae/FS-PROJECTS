import React from "react";
import Header from "../../components/header/Header";

const HomeScreen = ({ userEmail }) => {
  return (
    <div>
      <Header>{userEmail}</Header>
      <div className="form-container">
        <h1>This is home screen</h1>
      </div>
    </div>
  );
};

export default HomeScreen;

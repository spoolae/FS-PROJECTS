import React from "react";
import "./App.css";
import CiaoSection from "./components/CiaoSection";
import UserSection from "./components/UserSection";

const App = (props) => {
  return (
    <>
      <UserSection />
      <CiaoSection />
    </>
  );
};

export default App;

import React from "react";

const SortButton = ({ text, direction, onClick }) => (
  <button onClick={onClick}>
    {text} {direction ? "growth" : "decrease"}
  </button>
);

export default SortButton;

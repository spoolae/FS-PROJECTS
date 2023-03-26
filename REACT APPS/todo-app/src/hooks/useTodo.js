import { useState } from "react";

export const useTodo = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const resetForm = () => {
    setValues(initialState);
  };

  return [values, handleChange, resetForm];
};

import { useState } from "react";
import { LocalizationContext } from "../contexts/LocalizationContext";

export const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");

  return (
    <LocalizationContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocalizationContext.Provider>
  );
};

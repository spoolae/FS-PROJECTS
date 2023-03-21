import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.scss";
import { LocalizationProvider } from "./providers/LocalizationProvider";
import ErrorScreen from "./screens/ErrorScreen/ErrorScreen";
import HomeScreen from "./screens/HomeScreen.js/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";

const App = () => {
  return (
    <LocalizationProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/*" element={<ErrorScreen />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
};

export default App;

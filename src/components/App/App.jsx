import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import ServicesPage from "../../pages/ServicesPage/ServicesPage.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* Add other routes here */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </div>
  );
};
export default App;

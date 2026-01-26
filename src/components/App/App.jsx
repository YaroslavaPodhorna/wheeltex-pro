import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import ServicesPage from "../../pages/ServicesPage/ServicesPage.jsx";
import SuspensionPage from "../../pages/SuspensionPage/SuspensionPage.jsx";
import BrakesPage from "../../pages/BrakesPage/BrakesPage.jsx";
import ScrollToTop from "../ScrollToTop/ScrollToTop.jsx";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton.jsx";
// import ServiceDetailPage from "../../pages/ServiceDetailPage/ServiceDetailPage.jsx";
// import BookingPage from "../../pages/BookingPage/BookingPage.jsx";
// import AdminLoginPage from "../../pages/AdminLoginPage/AdminLoginPage.jsx";
// import AdminPage from "../../pages/AdminPage/AdminPage.jsx";
// import PrivateRoute from "../../components/auth/PrivateRoute.jsx";
// function ErrorBoundary({ children }) {
//   try {
//     return children;
//   } catch (error) {
//     console.error(error);
//     return <div>Something went wrong: {error.message}</div>;
//   }
// }

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/suspension" element={<SuspensionPage />} />
          <Route path="/services/brakes" element={<BrakesPage />} />
          {/* <Route path="/services/:id" element={<ServiceDetailPage />} /> */}
          {/* <Route path="/book" element={<BookingPage />} /> */}
          {/* Admin routes */}
          {/* <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            } /> */}
          {/* Add other routes here */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </main>
      <ScrollToTopButton />
    </div>
  );
};
export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPanel from "./admin/adminpanel";
import AdminLogin from "./admin/adminlogin";
import ProductList from "./components/productList";
import Home from "./components/Home";
import Login from "./user/Login";
import RegisterPage from "./user/Register";
import ProfilePage from "./components/Profile";
import AboutPage from "./components/about";
import ContactUs from "./components/contact";
import { SearchProvider } from "./components/SearchContext.jsx"; // Add the .jsx extension


function App() {
  return (
    <SearchProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* Other routes */}
      </Routes>
    </Router>
    </SearchProvider>
  );
}

export default App;





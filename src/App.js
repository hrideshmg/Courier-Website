import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import OrderPage from "./OrderPage/orderPage";
import SignupPage from "./SignUP/Signup";
import SigninPage from "./LoginPage/signIn";
import Navbar from "./Navbar/Navbar";
import AboutUs from "./AboutPage/about";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React from "react";
import logo from "../GlobalAssets/Images/Logo.png";
import "../GlobalAssets/css/theme.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: "#172025", filter: "drop-shadow(3px 3px 15px #090d17)" }}>
      <div className="container d-flex flex-row align-items-center justify-content-between">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" className="d-inline-block align-text-top" />
        </Link>
        <div className="navbar-nav text-center d-flex flex-row">
          <Link className="nav-item nav-link me-3" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link me-3" to="/order">
            My Orders
          </Link>
          <Link className="nav-item nav-link me-3" to="/about">
            About Us
          </Link>
        </div>
        <div className="auth-container">
          <Link to="/signin">
            <button className="auth-btn">LOGIN</button>
          </Link>
          <Link to="/signup">
            <button className="auth-btn">SIGN UP</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

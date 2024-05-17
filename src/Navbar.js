import React from 'react';
import logo from './Logo.png';
import './theme.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: '#172025', filter: 'drop-shadow(3px 3px 15px #090d17)' }}>
      <div className="container d-flex flex-row align-items-center justify-content-between">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" className="d-inline-block align-text-top" />
        </a>
        <div className="navbar-nav text-center d-flex flex-row">
          <a className="nav-item nav-link active me-3" href="HomePage.html">Home</a>
          <a className="nav-item nav-link me-3" href="order.html">My Orders</a>
          <a className="nav-item nav-link me-3" href="about.html">About Us</a>
        </div>
        <div className="auth-container">
          <a href="signIn.html"><button className="auth-btn">LOGIN</button></a>
          <a href="signUp.html"><button className="auth-btn">SIGN UP</button></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

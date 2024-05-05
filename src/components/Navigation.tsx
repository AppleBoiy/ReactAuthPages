import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          Logo
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" className="nav-link" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link" onClick={toggleMenu}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="nav-link" onClick={toggleMenu}>
            Register
          </Link>
        </li>
        <li>
          <Link to="/reset" className="nav-link" onClick={toggleMenu}>
            Reset Password
          </Link>
        </li>
        <li>
          <Link to="/waiting" className="nav-link" onClick={toggleMenu}>
            Waiting Confirmation
          </Link>
        </li>
        <li>
          <Link to="/confirmed" className="nav-link" onClick={toggleMenu}>
            Confirmed
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

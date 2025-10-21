// components/Layout/Sidebar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
// import logo from '../../assets/logo.png';

import Logo from "../logo/Logo";

const Sidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Background Blur Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu} />
      )}

      {/* Mobile Navbar */}
      <div className="mobile-navbar">
        <div className="mobile-nav-header">
          {/* ingresamos el logo */}
          <h2 className="mobile-logo">
            <Logo size={110}></Logo>
          </h2>
          <button
            className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="mobile-nav-list">
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/" onClick={closeMobileMenu}>
                Portada
              </Link>
            </li>
            <li className={location.pathname === "/bitacora" ? "active" : ""}>
              <Link to="/bitacora" onClick={closeMobileMenu}>
                Bitácora
              </Link>
            </li>
            <li className={location.pathname === "/json-data" ? "active" : ""}>
              <Link to="/json-data" onClick={closeMobileMenu}>
                Datos JSON
              </Link>
            </li>
            <li className={location.pathname === "/api-data" ? "active" : ""}>
              <Link to="/api-data" onClick={closeMobileMenu}>
                API Externa
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <div className="sidebar">
        <div className="sidebar-logo">
          {/* <img src={logo} alt="Logo Grupo 8" /> */}
          <Logo size={160}></Logo>
        </div>

        <nav className="sidebar-nav">
          <ul className="list-container">
            <li className={location.pathname === "/" ? "active" : "w-full"}>
              <Link to="/">Portada</Link>
            </li>
            <li
              className={
                location.pathname === "/bitacora" ? "active" : "w-full"
              }
            >
              <Link to="/bitacora">Bitácora</Link>
            </li>
            <li
              className={
                location.pathname === "/json-data" ? "active" : "w-full"
              }
            >
              <Link to="/json-data">Datos JSON</Link>
            </li>
            <li
              className={
                location.pathname === "/api-data" ? "active" : "w-full"
              }
            >
              <Link to="/api-data">API Externa</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

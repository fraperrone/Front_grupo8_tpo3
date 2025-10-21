import React from "react";
import Footer from "../footer/footer";
import "./layout.css";
import { useLocation, useNavigate } from "react-router-dom";

export const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="layout body">
      {location.pathname !== "/" && (
        <div className="back-button-container">
          <button className="back-button" onClick={() => navigate(-1)}>
            ← Volver
          </button>
        </div>
      )}
      {children}
      <Footer />
    </div>
  );
};

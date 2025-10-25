// src/pages/ApiDataPage.jsx
import React from "react";
import ApiData from "../data/ApiData";

const ApiDataPage = () => {
  return (
    <div className="profile">
      <div className="name">
        <h1 className="title">Datos desde API Externa</h1>
        <div className="info">
        <p>Información en tiempo real desde una API pública de Pokémon</p>
        <ApiData />
        </div>
      </div>
    </div>
  );
};

export default ApiDataPage;

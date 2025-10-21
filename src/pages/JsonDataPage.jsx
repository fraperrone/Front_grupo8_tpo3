// pages/JsonDataPage.jsx
import React from "react";
import JsonData from "../Data/JsonData";

const JsonDataPage = () => {
  return (
    <div className="profile">
      <div className="name">
        <h1 className="title">Datos desde Archivo JSON</h1>
        <div className="info">
          <p>
            En esta sección se muestran datos cargados desde un archivo JSON
            local, incluyendo información sobre películas, libros, videojuegos y
            otros contenidos.
          </p>

          <JsonData />
        </div>
      </div>
    </div>
  );
};

export default JsonDataPage;

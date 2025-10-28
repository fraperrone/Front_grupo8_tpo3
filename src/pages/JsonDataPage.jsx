// pages/JsonDataPage.jsx
import React from "react";
import JsonData from "../data/JsonData";
import { useNormalAnimation } from "../hooks/useNormalAnimation";

const JsonDataPage = () => {

  const jsonDataRef = React.useRef(null);
  //usamos el normal animation hook
  useNormalAnimation(jsonDataRef);

  return (
    <div className="profile" ref={jsonDataRef}>
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

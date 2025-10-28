// src/pages/ApiDataPage.jsx
import React from "react";
import ApiData from "../data/ApiData";
import { useNormalAnimation } from "../hooks/useNormalAnimation";




const ApiDataPage = () => {
  
  //ACTUALIZACION: agregamos normal animation hook
  const apiDataRef = React.useRef(null);
  //usamos el normal animation hook
  useNormalAnimation(apiDataRef);
  
  return (
    <div className="profile" ref={apiDataRef}>
      <div className="name">
        <h1 className="title">Datos desde API Externaaaaa</h1>
        <div className="info" >
        <p>Información en tiempo real desde una API pública de Pokémon</p>
        <ApiData />
        </div>
      </div>
    </div>
  );
};

export default ApiDataPage;

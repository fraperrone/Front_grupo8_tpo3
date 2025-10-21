// src/components/Data/JsonData.jsx
import React from "react";
import Card from "./Card";
import datos from "./datos.json";

const JsonData = () => {
  return (
    <div className="json-data">
      <h2>Colección de Contenidos</h2>
      <div className="cards-grid">
        {datos.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default JsonData;

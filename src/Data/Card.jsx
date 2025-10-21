// src/components/Data/Card.jsx
import React from "react";

const Card = ({ data, tipo = "default" }) => {
  if (tipo === "pokemon") {
    return (
      <div className="card">
        <h3>{data.name}</h3>
        <p>Tipo: Pokémon</p>
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          Ver detalles
        </a>
      </div>
    );
  }

  return (
    <div className="card">
      <h3>{data.titulo || data.nombre}</h3>
      <p>
        <strong>Tipo:</strong> {data.tipo}
      </p>
      {data.autor && (
        <p>
          <strong>Autor:</strong> {data.autor}
        </p>
      )}
      {data.genero && (
        <p>
          <strong>Género:</strong> {data.genero}
        </p>
      )}
      {data.año && (
        <p>
          <strong>Año:</strong> {data.año}
        </p>
      )}
      {data.descripcion && <p>{data.descripcion}</p>}
    </div>
  );
};

export default Card;

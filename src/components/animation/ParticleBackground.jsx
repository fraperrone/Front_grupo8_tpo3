// src/components/UI/ParticleBackground.jsx
import React from "react";

const ParticleBackground = () => {
  return (
    <>
      {[...Array(9)].map((_, i) => (
        <div key={i} className="particle" />
      ))}
    </>
  );
};

export default ParticleBackground;

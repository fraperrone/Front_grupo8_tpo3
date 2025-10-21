import React, { useRef } from "react";
import { useProfileAnimation } from "../../hooks/useProfileAnimation.js";
import "../../styles/main.css";
import avatarImg from "../../assets/avatar_guillermo.png";
import ProfileCard from "./ProfileCard.jsx";

const Guillermo = () => {
  const habilidades = ["JavaScript", "React", "Node.js"];
  const peliculasFavoritas = [
    "Volver al futuro",
    "The Elizabeth Thown",
    "Los Sospechosos de siempre",
  ];
  const integrante = {
    nombre: "Guillermo Kopacek",
    edad: 39,
    habilidades: habilidades,
    peliculasFavoritas: peliculasFavoritas,
    avatar: avatarImg,
  };
  

  // Bloque de prueba para el avatar

  return <ProfileCard integrante={integrante} />;
};

export default Guillermo;

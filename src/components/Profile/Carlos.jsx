import React from "react";
import "../../styles/main.css";
import ProfileCard from "./ProfileCard.jsx";
import avatarImg from "../../assets/avatar_carlos.png";

const Carlos = () => {
  const integrante = {
    nombre: "Carlos Sebastian Gauto",
    edad: 34,
    habilidades: ["Java", "JavaScript", "Node.js"],
    peliculasFavoritas: ["Blade Runner", "Interstellar", "Matrix"],
    avatar: avatarImg,
    musicaFavorita: [
      "(I Just) Died In Your Arms Tonight",
      "Walk of Life",
      "Africa",
    ],
  };

  return <ProfileCard integrante={integrante} />;
};

export default Carlos;

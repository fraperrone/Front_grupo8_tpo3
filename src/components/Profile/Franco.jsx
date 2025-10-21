import React from "react";
import "../../styles/main.css";
import ProfileCard from "./ProfileCard.jsx";
import avatarImg from "../../assets/avatar_franco.jpg";

const Franco = () => {
  const integrante = {
    nombre: "Franco Perrone",
    edad: 34,
    habilidades: ["JavaScript", "React", "Node.js"],
    peliculasFavoritas: ["Inception", "The Matrix", "Interstellar"],
    avatar: avatarImg,
    // agregamos musicaFavorita
    musicaFavorita: [
      "Queen - Bohemian Rhapsody",
      "Nirvana - Smells Like Teen Spirit",
      "The Beatles - Hey Jude",
    ],
  };

  return <ProfileCard integrante={integrante} />;
};

export default Franco;

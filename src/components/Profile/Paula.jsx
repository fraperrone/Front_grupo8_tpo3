import React from "react";
import "../../styles/main.css";
import ProfileCard from "./ProfileCard.jsx";
import avatarImg from "../../assets/paula_image.jpg";

const Paula = () => {
  const integrante = {
    nombre: "Paula Núñez",
    edad: 25,
    habilidades: ["HTML", "CSS", "JavaScript", "Webflow"],
    peliculasFavoritas: ["Brake", "Click", "El Descenso"],
    avatar: avatarImg,
    // agregamos musicaFavorita
    musicaFavorita: [
      "Linkin Park - Meteora",
      "A Day to Remember - Homesick",
      "Black Veil Brides - Set the World on Fire",
    ],
  };

  return <ProfileCard integrante={integrante} />;
};

export default Paula;

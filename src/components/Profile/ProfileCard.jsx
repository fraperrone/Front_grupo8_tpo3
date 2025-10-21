// components/Profile/ProfileCard.jsx
import React, { useRef } from "react";
import { useProfileAnimation } from "../../hooks/useProfileAnimation";

const ProfileCard = ({ integrante }) => {
  const profileRef = useRef(null);
  useProfileAnimation(profileRef);

  return (
    <div className="profile" ref={profileRef}>
      <div
        className="avatar"
        style={{
          backgroundImage: `url(${integrante.avatar})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "auto",
        }}
      />
      <div className="name">
        <h1 className="title">{integrante.nombre}</h1>
        <ul className="info">
          <li>
            <strong>Edad:</strong> {integrante.edad}
          </li>
          <li>
            <strong>Habilidades:</strong>
            <ul>
              {integrante.habilidades.map((habilidad, idx) => (
                <li key={idx}>{habilidad}</li>
              ))}
            </ul>
          </li>
          <li>
            <strong>Películas Favoritas:</strong>
            <ul>
              {integrante.peliculasFavoritas.map((pelicula, idx) => (
                <li key={idx}>{pelicula}</li>
              ))}
            </ul>
          </li>
          {integrante.musicaFavorita && (
            <li>
              <strong>Música Favorita:</strong>
              <ul>
                {integrante.musicaFavorita.map((musica, idx) => (
                  <li key={idx}>{musica}</li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;

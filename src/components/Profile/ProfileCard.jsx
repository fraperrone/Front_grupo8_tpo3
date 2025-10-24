// components/Profile/ProfileCard.jsx
import React, { useRef } from 'react'
import { useProfileAnimation } from '../../hooks/useProfileAnimation'
import BarraProgresoHabilidades from '../../actualizaciones/barra_progreso_habilidades/BarraProgresoHabilidades'

const ProfileCard = ({ integrante }) => {
  const profileRef = useRef(null)
  useProfileAnimation(profileRef)


  // validamos que el integrante tenga las habilidades declaradas
  const habilidadesValidas =
    integrante.habilidades &&
    Array.isArray(integrante.habilidades.nombre) &&
    Array.isArray(integrante.habilidades.porcentaje) &&
    integrante.habilidades.nombre.length === integrante.habilidades.porcentaje.length &&
    integrante.habilidades.nombre.every((n) => typeof n === 'string') &&
    integrante.habilidades.porcentaje.every((p) => typeof p === 'number');

  return (
    <div className="profile" ref={profileRef}>
      <div
        className="avatar"
        style={{
          backgroundImage: `url(${integrante.avatar})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: 'auto',
        }}
      />
      <div className="name">
        <h1 className="title">{integrante.nombre}</h1>
        <ul className="info">
          <li>
            <strong>Edad:</strong> {integrante.edad}
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
          <li>
            <strong>Habilidades:</strong>
            {habilidadesValidas ? (
              <ul>
                <BarraProgresoHabilidades habilidades={integrante.habilidades} />
              </ul>
            ) : (
              <p>⚠️ Completar bien el objeto integrante: faltan habilidades con nombre y porcentaje.</p>
            )}

          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileCard

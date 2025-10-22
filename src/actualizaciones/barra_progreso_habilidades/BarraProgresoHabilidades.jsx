// generamos la barra de progreso de habilidades
import React from 'react'
import './BarraProgresoHabilidades.css'

const BarraProgresoHabilidades = ({ habilidades }) => {
  return (
    <div className="barra-progreso-habilidades">
      {habilidades.nombre.map((habilidad, index) => (
        <div key={index} className="habilidad">
          <span className="nombre-habilidad">{habilidades.nombre[index]}</span>

          <div className="barra-fondo">
            <div
              className="barra-llenada"
              style={{ width: `${habilidades.porcentaje[index]}%` }}
            ></div>
          </div>
          <span className="porcentaje-habilidad">
            {habilidades.porcentaje[index]}%
          </span>
        </div>
      ))}
    </div>
  )
}

export default BarraProgresoHabilidades

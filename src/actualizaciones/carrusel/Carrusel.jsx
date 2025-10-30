import React, { useState } from 'react'
import '../../styles/JsonData.css'
import dataCarrusel from './carruselData'

const Carrusel = () => {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1))

  //definimos nosotros los proyectos (items)
  const items = dataCarrusel;
  const item = items[index];

  return (
    <div className="">
      
      <div className="carrusel-item">
        <div
          style={{ background: item.bg, padding: '2rem', borderRadius: '8px' }}
        >
          <h2>{item.title}</h2>

          {item.list ? (
            <ul>
              {item.list.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          ) : (
            <p style={{ whiteSpace: 'pre-wrap' }}>{item.text}</p>
          )}
        </div>
      </div>{' '}
          {/* btones */}
      <button onClick={prev} className="">
        ‹
      </button>
      <button onClick={next} className="">
        ›
      </button>
    </div>
  )
}

export default Carrusel

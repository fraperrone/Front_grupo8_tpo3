import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import '../styles/ApiData.css';

const ApiData = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [totalPokemon, setTotalPokemon] = useState(0);
  
  const ITEMS_POR_PAGINA = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCargando(true);
        const offset = (paginaActual - 1) * ITEMS_POR_PAGINA;
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=${ITEMS_POR_PAGINA}&offset=${offset}`
        );
        
        setDatos(response.data.results);
        setTotalPokemon(response.data.count);
        setTotalPaginas(Math.ceil(response.data.count / ITEMS_POR_PAGINA));
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, [paginaActual]);

  const irAPaginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const irAPaginaSiguiente = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual(paginaActual + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const irAPrimeraPagina = () => {
    setPaginaActual(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const irAUltimaPagina = () => {
    setPaginaActual(totalPaginas);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (cargando) {
    return (
      <div className="loading">
        <p>Cargando datos desde la API...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>Error: {error}</p>
        <p>Intenta recargar la página</p>
      </div>
    );
  } 

  return (
    <div className="api-data">
      {/* Información de paginación superior */}
      <div className="pagination-info">
        <p>
          Mostrando Pokémon {(paginaActual - 1) * ITEMS_POR_PAGINA + 1} - {Math.min(paginaActual * ITEMS_POR_PAGINA, totalPokemon)} de {totalPokemon}
        </p>
        <p className="page-indicator">
          Página <strong>{paginaActual}</strong> de <strong>{totalPaginas}</strong>
        </p>
      </div>

      {/* Grid de tarjetas */}
      <div className="cards-grid">
        {datos.map((pokemon, index) => (
          <Card key={index} data={pokemon} tipo="pokemon" />
        ))}
      </div>

      {/* Controles de paginación */}
      <div className="pagination-controls">
        <button 
          onClick={irAPrimeraPagina} 
          disabled={paginaActual === 1}
          className="pagination-button"
          title="Primera página"
        >
          ⏮ Primera
        </button>
        
        <button 
          onClick={irAPaginaAnterior} 
          disabled={paginaActual === 1}
          className="pagination-button"
          title="Página anterior"
        >
          ← Anterior
        </button>

        <span className="page-numbers">
          Página <strong>{paginaActual}</strong> de <strong>{totalPaginas}</strong>
        </span>

        <button 
          onClick={irAPaginaSiguiente} 
          disabled={paginaActual === totalPaginas}
          className="pagination-button"
          title="Página siguiente"
        >
          Siguiente →
        </button>

        <button 
          onClick={irAUltimaPagina} 
          disabled={paginaActual === totalPaginas}
          className="pagination-button"
          title="Última página"
        >
          Última ⏭
        </button>
      </div>
    </div>
  );
};

export default ApiData;
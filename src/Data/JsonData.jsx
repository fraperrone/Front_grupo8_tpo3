import React, { useState, useMemo } from "react";
import Card from "./Card";
import datos from "./datos.json";
import "../styles/JsonData.css"

const JsonData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTipo, setSelectedTipo] = useState("Todos");
  const [selectedGenero, setSelectedGenero] = useState("Todos");

  // Obtener tipos únicos
  const tipos = useMemo(() => {
    const uniqueTipos = [...new Set(datos.map(item => item.tipo))];
    return ["Todos", ...uniqueTipos];
  }, []);

  // Obtener géneros únicos
  const generos = useMemo(() => {
    const uniqueGeneros = [...new Set(datos.filter(item => item.genero).map(item => item.genero))];
    return ["Todos", ...uniqueGeneros];
  }, []);

  // Filtrar datos
  const datosFiltrados = useMemo(() => {
    return datos.filter(item => {
      const matchSearch = searchTerm === "" || 
        item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.descripcion && item.descripcion.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.autor && item.autor.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchTipo = selectedTipo === "Todos" || item.tipo === selectedTipo;

      const matchGenero = selectedGenero === "Todos" || item.genero === selectedGenero;

      return matchSearch && matchTipo && matchGenero;
    });
  }, [searchTerm, selectedTipo, selectedGenero]);

  const limpiarFiltros = () => {
    setSearchTerm("");
    setSelectedTipo("Todos");
    setSelectedGenero("Todos");
  };

  return (
    <div className="json-data">
      <h2 className="title">Colección de Contenidos</h2>
      
      {/* Controles de búsqueda y filtrado */}
      <div className="search-filter-container">
        {/* Buscador */}
        <div className="search-box">
          <label>Buscar</label>
          <input
            type="text"
            placeholder="Buscar por título, descripción o autor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Filtros */}
        <div className="filters-row">
          <div className="filter-group">
            <label>Tipo</label>
            <select
              value={selectedTipo}
              onChange={(e) => setSelectedTipo(e.target.value)}
              className="filter-select"
            >
              {tipos.map(tipo => (
                <option key={tipo} value={tipo}>{tipo}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Género</label>
            <select
              value={selectedGenero}
              onChange={(e) => setSelectedGenero(e.target.value)}
              className="filter-select"
            >
              {generos.map(genero => (
                <option key={genero} value={genero}>{genero}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <button onClick={limpiarFiltros} className="clear-button">
              Limpiar Filtros
            </button>
          </div>
        </div>

        {/* Contador de resultados */}
        <div className="results-count">
          Mostrando <strong>{datosFiltrados.length}</strong> de{" "}
          <strong>{datos.length}</strong> resultados
        </div>
      </div>

      {/* Grid de tarjetas */}
      {datosFiltrados.length > 0 ? (
        <div className="cards-grid">
          {datosFiltrados.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No se encontraron resultados con los filtros seleccionados</p>
        </div>
      )}
    </div>
  );
};

export default JsonData;
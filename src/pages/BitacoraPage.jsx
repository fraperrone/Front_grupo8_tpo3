// src/pages/BitacoraPage.jsx
import React from "react";
import "../styles/main.css";

const BitacoraPage = () => {
  return (
    <div className="profile">
      <div className="name">
        <h1 className="title">Bitácora del Proyecto</h1>

        <div className="info">
          <p className="mb-4">
            En esta sección se documenta el proceso de desarrollo del proyecto,
            incluyendo decisiones de diseño, dificultades encontradas y cambios
            importantes realizados.
          </p>

          <h2>Decisiones de diseño</h2>
          <ul className="mb-4">
            <li>
              Se eligió una paleta de colores con gradientes oscuros y acentos
              neón para un estilo futurista
            </li>
            <li>
              Implementación de partículas animadas para el fondo dinámico
            </li>
            <li>
              Uso de React con componentes reutilizables para mejor
              mantenibilidad
            </li>
            <li>
              Diseño responsive con 3 breakpoints (mobile, tablet, desktop)
            </li>
          </ul>

          <h2>Dificultades encontradas y soluciones</h2>
          <ul className="mb-4">
            <li>
              Problemas con la migración de HTML estático a React: se resolvió
              mediante componentización
            </li>
            <li>
              Animaciones CSS complejas: se optimizaron para mejor rendimiento
            </li>
            <li>Integración de React Router: se implementó navegación SPA</li>
            <li>
              Responsividad: se utilizó CSS Grid y Flexbox con media queries
            </li>
          </ul>

          <h2>Cambios importantes durante la implementación</h2>
          <ul className="mb-4">
            <li>
              Se reorganizó la estructura de carpetas para el paradigma de
              componentes
            </li>
            <li>
              Se implementó sidebar fijo en lugar del menú horizontal original
            </li>
            <li>Se agregaron secciones nuevas para datos JSON y API externa</li>
            <li>Se unificaron los estilos de los componentes de perfil</li>
          </ul>

          <h2>Reflexiones y evolución</h2>
          <p className="mb-4">
            La migración a React permitió una mejor organización del código,
            mayor reutilización de componentes y una experiencia de usuario más
            fluida como SPA. El uso de hooks y estados facilitó la gestión de
            datos dinámicos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BitacoraPage;

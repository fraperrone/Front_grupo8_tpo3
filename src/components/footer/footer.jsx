import React from "react";
import styles from "./footer.module.css"; // Los estilos no cambian
import { useSpotlight } from "../../hooks/useSpotlight";
import { useRef } from "react";

const spotlightStyles = {
  // position: 'fixed';
  position: "fixed",

  // width: '500px';
  width: "500px",

  // height: '500px';
  height: "500px",

  // border-radius: 50%;
  borderRadius: "50%",

  // El valor de 'background' es un string largo
  background:
    "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)",

  // pointer-events: none;
  pointerEvents: "none",

  // opacity puede ser un número directamente
  opacity: 0,

  // transform: 'translate(-50%, -50%)';
  transform: "translate(-50%, -50%)",
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerContainerRef = useRef(null);
  const spotlightRef = useSpotlight(footerContainerRef); // Usamos el hook*/

  return (
    <footer ref={footerContainerRef} className={styles.footerContainer}>
      <div ref={spotlightRef} style={spotlightStyles}></div>
      <div className={styles.footerContent}>
        {/* Columna 1: Información del Proyecto */}
        <div className={styles.footerSection}>
          <h4>TP 2 Con React</h4>
          <p>&copy; {currentYear} Grupo 8</p>
        </div>

        {/* Columna 2: Información Académica */}
        <div className={styles.footerSection}>
          <h4>IFTS 29</h4>
          <p>Desarrollo Front-End</p>
          <p>Profesor: Luciano Ariel Martinez</p>
        </div>

        {/* Columna 3: Enlaces Relevantes */}
        <div className={styles.footerLinks}>
          <a
            href="https://github.com/fraperrone/itfs29-FE-TPO2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositorio en GitHub
          </a>
          <a
            href="https://ifts29.edu.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pagina del Instituto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // ¡Muy importante exportarlo!

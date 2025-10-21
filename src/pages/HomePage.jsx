// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="profile">
      <div className="name">
        <h1 className="title">Equipo de Desarrollo Web - GRUPO 8</h1>
        <p>
          Somos un grupo de estudiantes dedicados a crear soluciones web
          innovadoras y funcionales.
        </p>

        <div className="integrantes-grid">
          <h2>Nuestros Integrantes</h2>
          <div className="integrantes-links">
            <Link to="/perfil/franco" className="integrante-link">
              Franco Perrone Rey
            </Link>
            <Link to="/perfil/carlos" className="integrante-link">
              Carlos Sebastian Gauto
            </Link>
            <Link to="/perfil/guillermo" className="integrante-link">
              Guillermo Kopacek
            </Link>
            <Link to="/perfil/paula" className="integrante-link">
              Paula Núñez
            </Link>
          </div>
        </div>

        <div className="features">
          <h2>Explora Nuestro Sitio</h2>
          <div className="features-grid">
            <Link to="/bitacora" className="feature-card">
              <h3>Bitácora</h3>
              <p>Proceso de desarrollo y decisiones del proyecto</p>
            </Link>
            <Link to="/json-data" className="feature-card">
              <h3>Datos JSON</h3>
              <p>Información desde archivo local</p>
            </Link>
            <Link to="/api-data" className="feature-card">
              <h3>API Externa</h3>
              <p>Datos en tiempo real desde APIs públicas</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// // src/pages/HomePage.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       <div className="body">
//         <div className="profile">
//           <h1 className="title">Equipo de Desarrollo Web - GRUPO 8</h1>
//           <p>Somos un grupo de estudiantes dedicados a crear soluciones web innovadoras y funcionales.</p>

//           <div className="integrantes-grid">
//             <h2>Nuestros Integrantes</h2>
//             <div className="integrantes-links">
//               <Link to="/perfil/franco" className="integrante-link">
//                 Franco Perrone Rey
//               </Link>
//               <Link to="/perfil/carlos" className="integrante-link">
//                 Carlos Sebastian Gauto
//               </Link>
//               <Link to="/perfil/guillermo" className="integrante-link">
//                 Guillermo Kopacek
//               </Link>
//               <Link to="/perfil/paula" className="integrante-link">
//                 Paula Núñez
//               </Link>
//             </div>
//           </div>

//           <div className="features">
//             <h2>Explora Nuestro Sitio</h2>
//             <div className="features-grid">
//               <Link to="/bitacora" className="feature-card">
//                 <h3>Bitácora</h3>
//                 <p>Proceso de desarrollo y decisiones del proyecto</p>
//               </Link>
//               <Link to="/json-data" className="feature-card">
//                 <h3>Datos JSON</h3>
//                 <p>Información desde archivo local</p>
//               </Link>
//               <Link to="/api-data" className="feature-card">
//                 <h3>API Externa</h3>
//                 <p>Datos en tiempo real desde APIs públicas</p>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// src/pages/BitacoraPage.jsx
import React from 'react'
import '../styles/main.css'
import { useNormalAnimation } from '../hooks/useNormalAnimation'

//usamos el profile animation hook

const BitacoraPage = () => {
  //usamos el normal animation hook <---- Actualiazación
  const bitacoraRef = React.useRef(null)
  useNormalAnimation(bitacoraRef)

  return (
    <div className="profile" ref={bitacoraRef}>
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

          <h2>Actualizaciones</h2>
          <p className="mb-4">
            <strong>Búsqueda/Filtrado en JSON Local:</strong> Se implementó un
            sistema completo de búsqueda y filtrado para los datos del archivo
            JSON local, permitiendo a los usuarios encontrar contenido de forma
            más eficiente. (Búsqueda por texto, Filtros por categorías, Botón
            "Limpiar Filtros", Contador de resultados.)
          </p>

          <p className="mb-4">
            <strong>Paginación para la API Externa:</strong> Se implementó
            paginación para los datos de la api. El límite de elementos
            mostrados se configura en la constante ITEMS_POR_PAGINA. Se puede
            avanzar a la página siguiente o anterior y también ir directamente
            al final o al inicio. Además se muestra la página actual y el total
            de páginas.
          </p>

          <p className="mb-4">
            <strong>Mejoras visuales en módulos de datos y API</strong> Se
            agregaron animaciones suaves en los módulos de Bitácora, Datos y
            API, que anteriormente no contaban con implementación visual
            dinámica. Esto mejora la experiencia del usuario al aportar
            transiciones más fluidas y coherentes.
          </p>

          <p className="mb-4">
            <strong>Habilidades graficas</strong> Se incorporó una barra gráfica
            de habilidades en formato tipo lista, reemplazando el sistema
            anterior basado únicamente en valores numéricos. Esta mejora
            facilita la interpretación visual de niveles y comparativas entre
            atributos.
          </p>

          <p className="mb-4">
            <strong>Carrusel visual</strong> Se incorporó un carrusel dinámico para mostrar contenido visual con transiciones suaves, reemplazando la presentación estática anterior. Esta mejora aporta interacción, organización y una experiencia más atractiva para el usuario.
          </p>


          <h2>Reflexiones y evolución</h2>
          <p className="mb-0">
            La migración a React permitió una mejor organización del código,
            mayor reutilización de componentes y una experiencia de usuario más
            fluida como SPA. El uso de hooks y estados facilitó la gestión de
            datos dinámicos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BitacoraPage

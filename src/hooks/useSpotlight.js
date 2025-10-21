import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useSpotlight = (containerRef) => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const spotlight = spotlightRef.current;
    if (!container || !spotlight) return;

    const quickToX = gsap.quickTo(spotlight, "x", { duration: 0.7, ease: "power3" });
    const quickToY = gsap.quickTo(spotlight, "y", { duration: 0.7, ease: "power3" });

    const handleMouseMove = (e) => {
      quickToX(e.clientX);
      quickToY(e.clientY);
    };

    const handleMouseEnter = () => gsap.to(spotlight, { opacity: 1, duration: 0.4 });
    const handleMouseLeave = () => gsap.to(spotlight, { opacity: 0, duration: 0.4 });

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Función de limpieza para eliminar los listeners cuando el componente se desmonte
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef]); // Se ejecuta de nuevo si la referencia del contenedor cambia

  return spotlightRef;
};
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import './EmblaCarousel.css';

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const slides = [
    {
      title: "Precio del Bitcoin",
      description: "Seguí en tiempo real el valor actual del Bitcoin y sus cambios recientes.",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRli613TiDL6hCdb2_Akb8ZAz2Wn8R-AaXi6aHzMGsxCGo_ywzCYM9hletq5hUhq5eORvw&usqp=CAU',
      url: 'https://inspiring-crumble-f85bc2.netlify.app/',
      objectFit:"contain"
    },
    {
      title: 'Aprendiendo finanzas',
      description: "Conceptos básicos para entender y manejar el dinero.",
      image: 'https://aprende-finanzas.netlify.app/Gemini_Generated_Logo.jpeg',
      url: 'https://aprende-finanzas.netlify.app/#',
      objectFit:"cover"
    },

  ];



  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <img className="embla__slide__img" src={slide.image} alt={slide.title} style={{objectFit:slide.objectFit}}/>
              <div className="embla__slide__content">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <a href={slide.url} target="_blank" rel="noopener noreferrer">
                  Ver más
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

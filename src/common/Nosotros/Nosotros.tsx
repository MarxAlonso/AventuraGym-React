import './Nosotros.css'
export const Nosotros = () => {
  return (
    <section id="gallery-1716" className="bg-nosotros">
      <div className="cs-container">
        <div className="cs-content mb-5">
            <br /><br /><br /><br /><br />
          <span className="cs-topper text-white">Nosotros</span>
          <h2 className="cs-title text-white">Somos un equipo</h2>
          <p className="cs-text text-white">
            El fracaso es solo la oportunidad de comenzar de nuevo de forma más
            inteligente
          </p>
        </div>
        <div className="cs-gallery">
          <picture className="cs-picture">
            {/*Mobile Image*/}
            <source
              media="(max-width: 600px)"
              srcSet="/src/assets/img/carrusel3.webp"
            />
            {/*Tablet and above Image*/}
            <source
              media="(min-width: 601px)"
              srcSet="/src/assets/img/carrusel3.webp"
            />
            <img
              loading="lazy"
              decoding="async"
              src="/src/assets/img/carrusel3.webp"
              alt="picture"
              width={480}
              height={549}
            />
          </picture>
          <picture className="cs-picture">
            {/*Mobile Image*/}
            <source
              media="(max-width: 600px)"
              srcSet="/src/assets/img/carrusel1.webp"
            />
            {/*Tablet and above Image*/}
            <source
              media="(min-width: 601px)"
              srcSet="/src/assets/img/carrusel1.webp"
            />
            <img
              loading="lazy"
              decoding="async"
              src="/src/assets/img/carrusel1.webp"
              alt="picture"
              width={480}
              height={549}
            />
          </picture>
          <picture className="cs-picture">
            {/*Mobile Image*/}
            <source
              media="(max-width: 600px)"
              srcSet="/src/assets/img/fondo-gym.webp"
            />
            {/*Tablet and above Image*/}
            <source
              media="(min-width: 601px)"
              srcSet="/src/assets/img/fondo-gym.webp"
            />
            <img
              loading="lazy"
              decoding="async"
              src="/src/assets/img/fondo-gym.webp"
              alt="picture"
              width={480}
              height={549}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

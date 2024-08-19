import { ReactTyped } from "react-typed";
import "./Servicios.css";
export const Servicios = () => {
  return (
    <>
      {/*Apartado de servicio*/}
      <section id="hero-1785">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper text-white">
              El mejor gimnasio de la ciudad para hacer ejercicio.
            </span>
            <h1 className="cs-title text-white">
              <ReactTyped
                strings={["Bienvenido :D!"]}
                typeSpeed={100}
                backSpeed={90}
                loop
              />
            </h1>
            <p className="cs-text text-white">
              Desarrolla confianza, compostura bajo presión y la disciplina
              necesaria para ser un campeón. Este es el gimnasio que estabas
              buscando.
            </p>
          </div>
        </div>
        {/* Background Image */}
        <picture className="cs-background">
          <source
            media="(max-width: 600px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-hero.png"
          />
          <source
            media="(min-width: 601px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-hero.png"
          />
          <img
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-hero.png"
            alt="field"
            width={1920}
            height={1200}
            aria-hidden="true"
          />
        </picture>
        <img
          className="cs-graphic"
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/white-splatter2.svg"
          alt="graphic"
          height={161}
          width={1920}
          loading="lazy"
          decoding="async"
        />
        <img
          className="cs-graphic cs-graphic-dark"
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/dark-mode-splatter2.svg"
          alt="graphic"
          height={161}
          width={1920}
          loading="lazy"
          decoding="async"
        />
      </section>
    </>
  );
};

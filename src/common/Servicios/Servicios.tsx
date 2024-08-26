import { ReactTyped } from "react-typed";
import "./Servicios.css";
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

export const Servicios2 = () => {
  return (
    <section id="services-1724">
      <div className="cs-container">
        <div className="cs-content">
          <div className="cs-flex-group">
            <span className="cs-topper">Nuestros Servicios</span>
            <h2 className="cs-title">Te capacitamos para ganar</h2>
          </div>
          <p className="cs-text">
            Los entrenamientos hacen que tu cuerpo pase de períodos de actividad
            aeróbica a períodos de las mejores herramientas de entrenamiento
            para desarrollar una fuerte actividad anaeróbica. Cuando su cuerpo
            está en "modo aeróbico", su cuerpo está usando oxígeno.
          </p>
        </div>
        <ul className="cs-card-group">
          <li className="cs-item">
            <a href="" className="cs-link">
              <span className="cs-number">01</span>
              <h3 className="cs-h3">Estiramiento</h3>
            </a>
            <picture className="cs-picture">
              <source
                media="(max-width: 600px)"
                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-1.png"
              />
              <source
                media="(min-width: 601px)"
                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-1.png"
              />
              <img
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-1.png"
                alt="finance"
                width={413}
                height={374}
                aria-hidden="true"
                loading="lazy"
              />
            </picture>
          </li>
          <li className="cs-item">
            <a href="" className="cs-link">
              <span className="cs-number">02</span>
              <h3 className="cs-h3">Hipertrofia</h3>
            </a>
            <picture className="cs-picture">
              <source
                media="(max-width: 600px)"
                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-2.png"
              />
              <source
                media="(min-width: 601px)"
                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-2.png"
              />
              <img
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-2.png"
                alt="finance"
                width={413}
                height={374}
                aria-hidden="true"
                loading="lazy"
              />
            </picture>
          </li>
          <li className="cs-item">
            <a href="" className="cs-link">
              <span className="cs-number">03</span>
              <h3 className="cs-h3">Fortaleza</h3>
            </a>
            <picture className="cs-picture">
              <source
                media="(max-width: 600px)"
                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-3.png"
              />
              <source
                media="(min-width: 601px)"
                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-3.png"
              />
              <img
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-3.png"
                alt="finance"
                width={413}
                height={374}
                aria-hidden="true"
                loading="lazy"
              />
            </picture>
          </li>
          <li className="cs-item">
            <a href="" className="cs-link">
              <span className="cs-number">04</span>
              <h3 className="cs-h3">Cardio</h3>
            </a>
            <picture className="cs-picture">
              <source
                media="(max-width: 600px)"
                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-4.png"
              />
              <source
                media="(min-width: 601px)"
                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-4.png"
              />
              <img
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-4.png"
                alt="finance"
                width={413}
                height={374}
                aria-hidden="true"
                loading="lazy"
              />
            </picture>
          </li>
          <li className="cs-item">
            <a href="" className="cs-link">
              <span className="cs-number">05</span>
              <h3 className="cs-h3">Yoga</h3>
            </a>
            <picture className="cs-picture">
              <source
                media="(max-width: 600px)"
                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-5.png"
              />
              <source
                media="(min-width: 601px)"
                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-5.png"
              />
              <img
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-5.png"
                alt="finance"
                width={413}
                height={374}
                aria-hidden="true"
                loading="lazy"
              />
            </picture>
          </li>
        </ul>
      </div>
    </section>
  );
};

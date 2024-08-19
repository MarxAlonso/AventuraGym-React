import { ReactTyped } from "react-typed";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <section id="hero-856" className="container-fluid text-white py-5 hero">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="cs-content text-center">
              <span className="cs-topper">
                <ReactTyped
                  strings={[
                    "¡Hola mundo,",
                    "Vamos a comenzar a entrenar",
                    "Preparado?",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </span>
              <h1 className="cs-title">
                <ReactTyped
                  strings={["¡Bienvenido a AventuraGym"]}
                  typeSpeed={100}
                  backSpeed={90}
                  loop
                />
              </h1>
              <p className="cs-text">
                Descubre tu potencial y alcanza tus metas de fitness en Aventura
                Gym. Con nuestro equipo de entrenadores expertos, instalaciones
                de vanguardia y una comunidad de apoyo, te ayudaremos a alcanzar
                tu mejor versión.
              </p>
              <a href="" className="btn btn-primary">
                ¡Únete a nosotros!
              </a>
            </div>
          </div>
          <br />
          <div className="col-md-6">
            <div className="cs-picture">
              <img
                src="/src/assets/img/fondo-gym.webp"
                alt="Fondo"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <svg
          className="cs-wave"
          width={1920}
          height={179}
          viewBox="0 0 1920 179"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1920 179V91.3463C1835.33 91.3463 1715.47 76.615 1549.2 32.9521C1299.48 -32.3214 1132.77 12.1006 947.32 61.5167C810.762 97.9044 664.042 137 466.533 137C331.607 137 256.468 123.447 188.082 111.113C130.974 100.812 78.5746 91.3609 0 91.3609V179H1920Z"
            fill="white"
          />
        </svg>
      </section>
      <br /><br />
    </>
  );
};

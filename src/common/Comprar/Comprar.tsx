import "./Comprar.css";
export const Comprar = () => {
  return (
    <>
      <br />
      <section id="services-502" className="mt-5">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Productos</span>
            <h2 className="cs-title">Para complementar tu entrenamiento</h2>
          </div>
          <ul className="cs-card-group">
            <li className="cs-item">
              <img
                className="cs-icon"
                aria-hidden="true"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/cube.svg"
                decoding="async"
                alt="cube icon"
                width={60}
                height={60}
              />
              <div className="cs-flex-group">
                <h3 className="cs-h3">Mejorar la Resistencia</h3>
                <p className="cs-item-text">
                  Minimiza el desgaste de los músculos y la bajada de proteínas.
                </p>
              </div>
            </li>
            <li className="cs-item">
              <img
                className="cs-icon"
                aria-hidden="true"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/cube.svg"
                decoding="async"
                alt="cube icon"
                width={60}
                height={60}
              />
              <div className="cs-flex-group">
                <h3 className="cs-h3">Aumentar la Musculatura</h3>
                <p className="cs-item-text">
                  Si se combina con ejercicios de fuerza ayuda a aumentar la
                  masa muscular.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/*Background Image*/}
        <picture className="cs-background">
          <source
            media="(max-width: 767px)"
            srcSet="/src/assets/img/products-gym.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/src/assets/img/products-gym.jpg"
          />
          <img
            loading="lazy"
            decoding="async"
            src="/src/assets/img/products-gym.jpg"
            alt="people"
            width={275}
            height={132}
            aria-hidden="true"
          />
        </picture>
      </section>
    </>
  );
};

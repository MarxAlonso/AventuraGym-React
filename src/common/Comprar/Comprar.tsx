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

export const Comprar2 = () => {
  return (
    <main className="container">
      <br />
      <h1 className="mb-4">Bienvenido,</h1>
      <h2 className="mb-4">Nuestros Productos</h2>
      <div className="row justify-content-between align-items-center mb-3">
        <div className="col-md-4">
          <input
            type="text"
            id="filterInput"
            className="form-control mb-4"
            placeholder="Buscar por nombre..."
          />
        </div>
        <div className="row" id="productCards">
          <div className="col-md-4">
            <div
              className="card mb-4 card-custom"
              style={{ boxShadow: "2px 5px 2px 3px rgba(0, 0, 0, 0.3)" }}
            >
              <img src="/src/assets/img/productos/nitrowhey.webp" className="card-img-top" alt="" />
              <div className="card-body card-body-custom">
                <h3 style={{ fontSize: 20 }} className="card-title" />
                <p className="card-text">
                  <strong>Precio:</strong> S/ 250.00
                </p>
                <p className="card-text">
                  <strong>Stock:</strong> 5
                </p>
                <a href="" className="btn btn-success mt-auto">
                  Ver Detalles
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card mb-4 card-custom"
              style={{ boxShadow: "2px 5px 2px 3px rgba(0, 0, 0, 0.3)" }}
            >
              <img src="/src/assets/img/productos/proteinanitro.jpeg" className="card-img-top" alt="" />
              <div className="card-body card-body-custom">
                <h3 style={{ fontSize: 20 }} className="card-title" />
                <p className="card-text">
                  <strong>Precio:</strong> S/ 250.00
                </p>
                <p className="card-text">
                  <strong>Stock:</strong> 5
                </p>
                <a href="" className="btn btn-success mt-auto">
                  Ver Detalles
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card mb-4 card-custom"
              style={{ boxShadow: "2px 5px 2px 3px rgba(0, 0, 0, 0.3)" }}
            >
              <img src="/src/assets/img/productos/hidrolyzed.webp" className="card-img-top" alt="" />
              <div className="card-body card-body-custom">
                <h3 style={{ fontSize: 20 }} className="card-title" />
                <p className="card-text">
                  <strong>Precio:</strong> S/ 250.00
                </p>
                <p className="card-text">
                  <strong>Stock:</strong> 5
                </p>
                <a href="" className="btn btn-success mt-auto">
                  Ver Detalles
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

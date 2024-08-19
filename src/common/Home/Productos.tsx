import "./Productos.css";
export const Productos = () => {
  return (
    <>
      <div className="container-fluid no-padding">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="image-container">
              <img
                src="https://www.etprotein.com/wp-content/uploads/2024/03/cd416a86632a9b7971fbf10855b739d4-1024x585.png"
                className="img-fluid"
                alt="Banner Suplementos"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-container">
              <img
                src="https://www.luisriverav.com/wp-content/uploads/2017/05/gym-supplements.jpg"
                className="img-fluid"
                alt="Comunidad InstaFit"
              />
              <div className="overlay" />
              <div className="text-overlay">
                <h2>SUPLEMENTOS</h2>
                <a href="#productos-gym" className="btn btn-primary">
                  Mira las ofertas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const VentaProductos = () => {
  return (
    <div className="container mt-5" id="productos-gym">
      <h2 className="text-center mb-4">Nuestros Productos</h2>
      <div className="row d-none d-md-flex">
        <div className="col-md-4 mb-4">
          <div className="card card-custom">
            <img
              src="/src/assets/img/productos/aminoacidos.webp"
              className="card-img-top"
              alt=""
            />
            <div className="card-body card-body-custom">
              <h3 className="card-title" />
              <p className="card-text">
                <strong>Precio:</strong> 150.00
              </p>
              <a href="" className="btn btn-success mt-auto">
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card card-custom">
            <img
              src="/src/assets/img/productos/colagenohidrolizado.webp"
              className="card-img-top"
              alt=""
            />
            <div className="card-body card-body-custom">
              <h3 className="card-title" />
              <p className="card-text">
                <strong>Precio:</strong> 150.00
              </p>
              <a href="" className="btn btn-success mt-auto">
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card card-custom">
            <img
              src="/src/assets/img/productos/collagen.webp"
              className="card-img-top"
              alt=""
            />
            <div className="card-body card-body-custom">
              <h3 className="card-title" />
              <p className="card-text">
                <strong>Precio:</strong> 150.00
              </p>
              <a href="" className="btn btn-success mt-auto">
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card card-custom">
            <img
              src="/src/assets/img/productos/creatina.webp"
              className="card-img-top"
              alt=""
            />
            <div className="card-body card-body-custom">
              <h3 className="card-title" />
              <p className="card-text">
                <strong>Precio:</strong> 150.00
              </p>
              <a href="" className="btn btn-success mt-auto">
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card card-custom">
            <img
              src="/src/assets/img/productos/creatinamonohidratada.webp"
              className="card-img-top"
              alt=""
            />
            <div className="card-body card-body-custom">
              <h3 className="card-title" />
              <p className="card-text">
                <strong>Precio:</strong> 150.00
              </p>
              <a href="" className="btn btn-success mt-auto">
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

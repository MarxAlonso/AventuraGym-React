import './Productos.css'
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

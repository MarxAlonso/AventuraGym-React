import './Services.css'
export const Services = () => {
  return (
    <section className="service_section layout_padding">
      <div className="container">
        <div className="d-flex flex-column align-items-center align-items-md-end">
          <div className="custom_heading-container">
            <h2>¿Qué debo llevar al gimnasio?</h2>
          </div>
          <p>
            Para estar bien preparado y tener una experiencia de gimnasio
            exitosa, asegúrate de llevar los siguientes elementos esenciales:
          </p>
        </div>
      </div>
      <div className="container d-none d-md-block">
        <div className="service_container layout_padding2">
          <div className="box">
            <div className="name">
              <h6>Ropa adecuada</h6>
              <div
                className="d-flex align-items-center"
                style={{ height: 260 }}
              >
                <p style={{ color: "black" }}>
                  Lleva ropa cómoda y transpirable, como camisetas de algodón y
                  pantalones cortos o leggins.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="name">
              <h6>Calzado apropiado</h6>
              <div
                className="d-flex align-items-center"
                style={{ height: 260 }}
              >
                <p style={{ color: "black" }}>
                  Un buen par de zapatillas deportivas que proporcionen soporte
                  y amortiguación es crucial para evitar lesiones.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="name">
              <h6>Toalla</h6>
              <div
                className="d-flex align-items-center"
                style={{ height: 260 }}
              >
                <p style={{ color: "black" }}>
                  Lleva una toalla para secarte el sudor y limpiar el equipo
                  después de usarlo.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="name">
              <h6>Botella de agua</h6>
              <div
                className="d-flex align-items-center"
                style={{ height: 260 }}
              >
                <p style={{ color: "black" }}>
                  Mantente hidratado durante tu entrenamiento con una botella de
                  agua reutilizable.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="name">
              <h6>Accesorios personales</h6>
              <div
                className="d-flex align-items-center"
                style={{ height: 260 }}
              >
                <p style={{ color: "black" }}>
                  Incluye auriculares, una bolsa de gimnasio y cualquier otro
                  equipo personal que necesites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

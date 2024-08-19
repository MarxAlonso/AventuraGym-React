import "./Services.css";
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
export const PrimerosPasos = () => {
  return (
    <section id="nosotros">
      <div className="container ">
        <h2
          className="mt-5"
          style={{
            textAlign: "center",
            fontFamily: "fantasy",
            fontSize: 28,
            border: "2px solid black",
            borderRadius: "10vmax",
            borderColor: "#5c92ba",
            padding: 18,
            color: "#456bb1",
            marginBottom: 50,
          }}
        >
          ¿CÓMO INSCRIBIRTE?
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6 a">
              <img
                src="/src/assets/img/IMAGEN-1-PASO-1.png"
                alt="Imagen"
                className="img-fluid mx-auto d-block"
              />
            </div>
            <div className="col-md-6 ">
              <p className="paso">Primer paso:</p>
              <div className="contenido-paso" style={{ marginLeft: 15 }}>
                <p style={{ marginBottom: 0, color: "#41629f", fontSize: 18 }}>
                  ¡Para hacer uso de nuestros servicios en el gym entra a
                </p>
                <p style={{ marginBottom: 0, color: "#41629f", fontSize: 18 }}>
                  "Contáctanos" que se encuentra al inicio de la
                </p>
                <p style={{ marginBottom: 0, color: "#41629f", fontSize: 18 }}>
                  página!
                </p>
              </div>
            </div>
          </div>
          <hr style={{ border: "5px solid green" }} />
          <div className="row">
            <div className="col-md-6 align-self-center">
              <p className="paso2">Segundo paso:</p>
              <div className="contenido-paso2">
                <p style={{ marginBottom: 0, color: "#41629f", fontSize: 18 }}>
                  Completa tus datos y en instantes estaremos
                </p>
                <p style={{ marginBottom: 0, color: "#41629f", fontSize: 18 }}>
                  contactándonos con usted.
                </p>
              </div>
            </div>
            <div className="col-md-4 align-self-center ">
              <img
                src="/src/assets/img/IMAGEN-2-PASO-2.png"
                alt="Imagen"
                className="img-fluid mx-auto d-block"
              />
            </div>
          </div>
          <hr style={{ border: "5px solid green" }} />
          <div className="row">
            <div className="col-md-6 a">
              <img
                src="/src/assets/img/IMAGEN-3-PASO-3.png"
                alt="Imagen"
                className="img-fluid mx-auto d-block"
                style={{ width: "33%", height: "auto" }}
              />
            </div>
            <div className="col-md-6 align-self-center">
              <p className="paso">Tercer paso:</p>
              <div className="contenido-paso " style={{ marginLeft: 15 }}>
                <p style={{ marginBottom: 0, color: "#41629f", fontSize: 18 }}>
                  ¡Coméntanos cuál es el local que está interesado y
                </p>
                <p style={{ marginBottom: 0, color: "#41629f", fontSize: 18 }}>
                  buscaremos la información y promociones más adecuada para su
                </p>
                <p style={{ marginBottom: 0, color: "#41629f", fontSize: 18 }}>
                  bolsillo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};

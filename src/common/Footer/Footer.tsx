import "./Footer.css";
export const Footer = () => {
  return (
    <>
      <footer className="footer-tipo">
        <div className="container">
          <div className="row">
            <div className="footer-col col-sm-6 col-lg-3">
              <br />
              <a href="inicio">
                <img
                  src="/src/assets/img/aventura-gym.webp"
                  className="logo-footer"
                  width={150}
                  alt="Logo empresa"
                />
              </a>
              <br />
              <br />
              <span className="info-gym">
                <b>Medios de pagos</b>
              </span>
              <p className="info-gym">Aceptamos todos los medios de pago</p>
              <a href="terminos-condiciones" className="terminos">
                Términos y Condiciones
              </a>
            </div>
            <div className="footer-col col-sm-6 col-lg-3">
              <br />
              <a className="menus" href="inicio">
                Inicio
              </a>
              <a className="menus" href="nosotros">
                Nosotros
              </a>
              <a className="menus" href="servicios">
                Servicios
              </a>
              <a className="menus" href="locales">
                Nuestro Locales
              </a>
              <a className="menus" href="blog">
                Blog
              </a>
              <a className="menus" href="contacto">
                Contacto
              </a>
            </div>
            <div className="footer-col col-sm-6 col-lg-3">
              <br />
              <span className="horarios">HORARIO DE ATENCION</span>
              <p className="horarios">Lunes a Vierens de 06:00am a 10:00pm</p>
              <p className="horarios">Sábados de 6:00am a 10:00pm</p>
              <p className="horarios">Domingos de 6:00am a 11:00am</p>
              <p className="horarios">
                <b>Números de contacto</b>
                <br />
                Whatsapp: 978 105 066 <br />
                Fijo local 1: 01 528 9667 <br />
                Fijo Local 2: 01 688 4174 <br />
                Realizamos delivery
              </p>
            </div>
            <div className="footer-col col-sm-6 col-lg-3">
              <div className="sociales">
                <br />
                <a
                  className="social-icon facebook"
                  href="https://www.facebook.com/profile.php?id=100063782141554"
                  target="_blank"
                >
                  <i className="bi bi-facebook" />
                </a>
                <a
                  className="social-icon whatsapp"
                  href="https://wa.link/3mxkpp"
                  target="_blank"
                >
                  <i className="bi bi-whatsapp" />
                </a>
                <a className="social-icon instagram" href="#" target="_blank">
                  <i className="bi bi-instagram" />
                </a>
                <a
                  className="social-icon tiktok"
                  href="https://www.tiktok.com/@toritogrillperu"
                  target="_blank"
                >
                  <i className="bi bi-tiktok" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="container-fluid">
        <div className="row justify-content-center creador">
          <p>©2024 Creador Marx Chipana. All right reserved.</p>
        </div>
      </div>
    </>
  );
};

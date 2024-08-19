import "./Nosotros.css";
export const Nosotros = () => {
  return (
    <section id="gallery-1716" className="bg-nosotros">
      <div className="cs-container">
        <div className="cs-content mb-5">
          <br />
          <br />
          <br />
          <br />
          <br />
          <span className="cs-topper text-white">Nosotros</span>
          <h2 className="cs-title text-white">Somos un equipo</h2>
          <p className="cs-text text-white">
            El fracaso es solo la oportunidad de comenzar de nuevo de forma más
            inteligente
          </p>
        </div>
        <div className="cs-gallery">
          <picture className="cs-picture">
            {/*Mobile Image*/}
            <source
              media="(max-width: 600px)"
              srcSet="/src/assets/img/carrusel3.webp"
            />
            {/*Tablet and above Image*/}
            <source
              media="(min-width: 601px)"
              srcSet="/src/assets/img/carrusel3.webp"
            />
            <img
              loading="lazy"
              decoding="async"
              src="/src/assets/img/carrusel3.webp"
              alt="picture"
              width={480}
              height={549}
            />
          </picture>
          <picture className="cs-picture">
            {/*Mobile Image*/}
            <source
              media="(max-width: 600px)"
              srcSet="/src/assets/img/carrusel1.webp"
            />
            {/*Tablet and above Image*/}
            <source
              media="(min-width: 601px)"
              srcSet="/src/assets/img/carrusel1.webp"
            />
            <img
              loading="lazy"
              decoding="async"
              src="/src/assets/img/carrusel1.webp"
              alt="picture"
              width={480}
              height={549}
            />
          </picture>
          <picture className="cs-picture">
            {/*Mobile Image*/}
            <source
              media="(max-width: 600px)"
              srcSet="/src/assets/img/fondo-gym.webp"
            />
            {/*Tablet and above Image*/}
            <source
              media="(min-width: 601px)"
              srcSet="/src/assets/img/fondo-gym.webp"
            />
            <img
              loading="lazy"
              decoding="async"
              src="/src/assets/img/fondo-gym.webp"
              alt="picture"
              width={480}
              height={549}
            />
          </picture>
        </div>
      </div>
      <br /><br />
    </section>
  );
};
export const Entrenadores = () => {
  return (
    <>
    <br /><br />
      <section id="meet-team-1765">
        <div className="cs-container">
          <div className="cs-content">
            <div className="cs-flex-wrapper">
              <div className="cs-flex">
                <span className="cs-topper text-white">Nuestros entrenadores</span>
                <h2 className="cs-title text-white">
                  Estamos haciendo que las personas sean más saludables y
                  felices
                </h2>
              </div>
            </div>
            <div className="cs-wrapper">
              <p className="cs-text text-white">
                Estamos seguros de que nuestro personal y nuestras instalaciones
                pueden ayudarlo a alcanzar sus objetivos de acondicionamiento
                físico. Ya seas principiante o profesional, estamos aquí para
                ayudarte. Después de pasar tiempo en nuestras instalaciones y
                con nuestro equipo, queremos que nuestros miembros salgan de
                nuestras puertas después de hacer ejercicio y sientan que son
                una mejor versión de sí mismos.
              </p>
              <ul className="cs-ul">
                <li className="cs-li text-white">
                  <img
                    className="cs-check-icon"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/orange-check.svg"
                    alt="checkmark"
                    width={20}
                    height={20}
                  />
                  Lograrás tus objetivos
                </li>
                <li className="cs-li text-white">
                  <img
                    className="cs-check-icon"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/orange-check.svg"
                    alt="checkmark"
                    width={20}
                    height={20}
                  />
                  Aprenderás algo nuevo
                </li>
                <li className="cs-li text-white">
                  <img
                    className="cs-check-icon"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/orange-check.svg"
                    alt="checkmark"
                    width={20}
                    height={20}
                  />
                  Encontrarás la ayuda útil
                </li>
                <li className="cs-li text-white">
                  <img
                    className="cs-check-icon"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/orange-check.svg"
                    alt="checkmark"
                    width={20}
                    height={20}
                  />
                  Ganarás confianza
                </li>
                <li className="cs-li text-white">
                  <img
                    className="cs-check-icon"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/orange-check.svg"
                    alt="checkmark"
                    width={20}
                    height={20}
                  />
                  Tendrás soporte ilimitado
                </li>
              </ul>
            </div>
          </div>
          <ul className="cs-card-group">
            <li className="cs-item">
              <div className="cs-image-group">
                <picture className="cs-picture">
                  {/*Mobile Image*/}
                  <source
                    media="(max-width: 600px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-meet-team-1.png"
                  />
                  {/*Tablet and above Image*/}
                  <source
                    media="(min-width: 601px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-meet-team-1.png"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-meet-team-1.png"
                    alt="person"
                    width={305}
                    height={440}
                  />
                </picture>
                <div className="cs-social">
                  <a
                    href=""
                    className="cs-link"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="cs-icon"
                      loading="lazy"
                      decoding="async"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/facebook-grey.svg"
                      alt="facebook"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a
                    href=""
                    className="cs-link"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="cs-icon"
                      loading="lazy"
                      decoding="async"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/x-grey.svg"
                      alt="twitter"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a
                    href=""
                    className="cs-link"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="cs-icon"
                      loading="lazy"
                      decoding="async"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/instagram-grey.svg"
                      alt="instagram"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
              <div className="cs-info text-white">
                <span className="cs-name">Michael Saso</span>
                <span className="cs-job">Instructor Fitnnes</span>
              </div>
            </li>
            <li className="cs-item">
              <div className="cs-image-group">
                <picture className="cs-picture">
                  {/*Mobile Image*/}
                  <source
                    media="(max-width: 600px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-meet-team-2.png"
                  />
                  {/*Tablet and above Image*/}
                  <source
                    media="(min-width: 601px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-meet-team-2.png"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-meet-team-2.png"
                    alt="person"
                    width={305}
                    height={440}
                  />
                </picture>
                <div className="cs-social">
                  <a
                    href=""
                    className="cs-link"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="cs-icon"
                      loading="lazy"
                      decoding="async"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/facebook-grey.svg"
                      alt="facebook"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a
                    href=""
                    className="cs-link"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="cs-icon"
                      loading="lazy"
                      decoding="async"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/x-grey.svg"
                      alt="twitter"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a
                    href=""
                    className="cs-link"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="cs-icon"
                      loading="lazy"
                      decoding="async"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/instagram-grey.svg"
                      alt="instagram"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
              <div className="cs-info text-white">
                <span className="cs-name">Maria Alexandra</span>
                <span className="cs-job">Nutricionista</span>
              </div>
            </li>
            <li className="cs-item">
              <div className="cs-image-group">
                <picture className="cs-picture">
                  {/*Mobile Image*/}
                  <source
                    media="(max-width: 600px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-meet-team-3.png"
                  />
                  {/*Tablet and above Image*/}
                  <source
                    media="(min-width: 601px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-meet-team-3.png"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-meet-team-3.png"
                    alt="person"
                    width={305}
                    height={440}
                  />
                </picture>
                <div className="cs-social">
                  <a
                    href=""
                    className="cs-link"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="cs-icon"
                      loading="lazy"
                      decoding="async"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/facebook-grey.svg"
                      alt="facebook"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a
                    href=""
                    className="cs-link"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="cs-icon"
                      loading="lazy"
                      decoding="async"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/x-grey.svg"
                      alt="twitter"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a
                    href=""
                    className="cs-link"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="cs-icon"
                      loading="lazy"
                      decoding="async"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/instagram-grey.svg"
                      alt="instagram"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
              <div className="cs-info text-white">
                <span className="cs-name">Jhon Kennedy</span>
                <span className="cs-job">Instructor Fitness</span>
              </div>
            </li>
            <li className="cs-item">
              <div className="cs-image-group">
                <picture className="cs-picture">
                  {/*Mobile Image*/}
                  <source
                    media="(max-width: 600px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-person.png"
                  />
                  {/*Tablet and above Image*/}
                  <source
                    media="(min-width: 601px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-person.png"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-person.png"
                    alt="person"
                    width={305}
                    height={440}
                  />
                </picture>
                <div className="cs-social">
                  <a
                    href=""
                    className="cs-link"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="cs-icon"
                      loading="lazy"
                      decoding="async"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/facebook-grey.svg"
                      alt="facebook"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a
                    href=""
                    className="cs-link"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="cs-icon"
                      loading="lazy"
                      decoding="async"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/x-grey.svg"
                      alt="twitter"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a
                    href=""
                    className="cs-link"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="cs-icon"
                      loading="lazy"
                      decoding="async"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/instagram-grey.svg"
                      alt="instagram"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
              <div className="cs-info text-white">
                <span className="cs-name">Kathy Cruz</span>
                <span className="cs-job">Nutricionista</span>
              </div>
            </li>
            <li className="cs-item">
              <div className="cs-image-group">
                <picture className="cs-picture">
                  {/*Mobile Image*/}
                  <source
                    media="(max-width: 600px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-person2.png"
                  />
                  {/*Tablet and above Image*/}
                  <source
                    media="(min-width: 601px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-person2.png"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-person2.png"
                    alt="person"
                    width={305}
                    height={440}
                  />
                </picture>
                <div className="cs-social">
                  <a
                    href=""
                    className="cs-link"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="cs-icon"
                      loading="lazy"
                      decoding="async"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/facebook-grey.svg"
                      alt="facebook"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a
                    href=""
                    className="cs-link"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="cs-icon"
                      loading="lazy"
                      decoding="async"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/x-grey.svg"
                      alt="twitter"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a
                    href=""
                    className="cs-link"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="cs-icon"
                      loading="lazy"
                      decoding="async"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/instagram-grey.svg"
                      alt="instagram"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
              <div className="cs-info text-white">
                <span className="cs-name">David Garcia</span>
                <span className="cs-job">Personal Trainer</span>
              </div>
            </li>
          </ul>
        </div>
        <br /><br />
      </section>
    </>
  );
};

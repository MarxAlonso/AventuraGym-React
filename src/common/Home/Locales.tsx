import React, { useEffect } from 'react';
import './Locales.css';

export const Locales = () => {

  useEffect(() => {
    // Mostrar más contenido
    const verMasBtn = document.getElementById("ver-mas-btn");
    const contenidoAdicional = document.getElementById("contenido-adicional");
    if (verMasBtn) {
      verMasBtn.addEventListener("click", () => {
        if (contenidoAdicional) contenidoAdicional.style.display = "block";
        verMasBtn.style.display = "none";
      });
    }

    // Búsqueda de contenido
    const buscarSeguro = () => {
      const textoBusqueda = (document.getElementById("input-busqueda") as HTMLInputElement).value.toLowerCase();
      const seguros = document.getElementsByClassName("info-div");

      for (let i = 0; i < seguros.length; i++) {
        const seguro = seguros[i] as HTMLElement;
        const nombreLocal = seguro
          .getElementsByClassName("info-text")[0]
          .getElementsByTagName("h3")[0]
          .innerText.toLowerCase();

        if (nombreLocal.includes(textoBusqueda)) {
          seguro.style.display = "block";
        } else {
          seguro.style.display = "none";
        }
      }
    };

    const inputBusqueda = document.getElementById("input-busqueda");
    if (inputBusqueda) {
      inputBusqueda.addEventListener("input", buscarSeguro);
    }

    // Cleanup function to remove event listeners
    return () => {
      if (verMasBtn) verMasBtn.removeEventListener("click", () => {});
      if (inputBusqueda) inputBusqueda.removeEventListener("input", buscarSeguro);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                type="text"
                id="input-busqueda"
                className="form-control"
                placeholder="Buscar..."
                aria-label="Buscar..."
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-primary"
                type="button"
                id="boton-busqueda"
              >
                <i className="bi bi-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="info-div clearfix">
              <img src="/src/assets/img/localSantaAna.webp" alt="Imagen 1" />
              <div className="info-text">
                <h3>Aventura Gym Local Santa Ana Pro</h3>
                <ul>
                  <li>Áreas de cardio y pesas totalmente equipadas.</li>
                  <li>Clases grupales de yoga, pilates y zumba.</li>
                  <li>Entrenadores personales disponibles para sesiones privadas.</li>
                  <li>Horarios extendidos para mayor comodidad.</li>
                </ul>
                <a className="enlace-leer" href="locales/santana.php">
                  Leer más
                </a>
              </div>
            </div>
            <div className="info-div clearfix">
              <img src="/src/assets/img/localNaranjal.webp" alt="Imagen 2" />
              <div className="info-text">
                <h3>Aventura Gym Local Naranjal</h3>
                <ul>
                  <li>Zona de musculación con máquinas de última generación.</li>
                  <li>Clases de spinning y entrenamiento funcional.</li>
                  <li>Nutricionistas para asesoramiento personalizado.</li>
                  <li>Acceso a sauna y área de relajación post-entrenamiento.</li>
                </ul>
                <a className="enlace-leer" href="locales/naranjal.php">
                  Leer más
                </a>
              </div>
            </div>
            <div className="info-div clearfix">
              <img src="/src/assets/img/local-Universitaria2751.webp" alt="Imagen 2" />
              <div className="info-text">
                <h3>Aventura Gym Local Universitaria 2751</h3>
                <ul>
                  <li>Piscina semi-olímpica para natación y clases de aquafitness.</li>
                  <li>Salones de usos múltiples para clases de artes marciales y baile.</li>
                  <li>Entrenamiento de alta intensidad (HIIT) disponible.</li>
                  <li>Cafetería saludable con opciones de batidos y snacks.</li>
                </ul>
                <a className="enlace-leer" href="locales/universitaria.php">
                  Leer más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Botón Ver más */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <button id="ver-mas-btn" className="btn btn-primary mt-4">
              Ver más
            </button>
          </div>
        </div>
      </div>
      <br />
      {/* Contenedor de los elementos que se mostrarán después de hacer clic en "Ver más" */}
      <div id="contenido-adicional" style={{ display: "none" }}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="info-div clearfix">
                <img src="/src/assets/img/local-sanmartinporres.webp" alt="Imagen 1" />
                <div className="info-text">
                  <h3>Aventura Gym Local San Martin de Porres</h3>
                  <ul>
                    <li>Programa de entrenamiento personalizado según tus objetivos.</li>
                    <li>Clases de crossfit y bootcamp.</li>
                    <li>Servicio de guardería para que entrenes sin preocupaciones.</li>
                    <li>Área de estiramiento y recuperación muscular.</li>
                  </ul>
                  <a className="enlace-leer" href="locales/smp.php">
                    Leer más
                  </a>
                </div>
              </div>
              <div className="info-div clearfix">
                <img src="/src/assets/img/local-santaanita.webp" alt="Imagen 2" />
                <div className="info-text">
                  <h3>Aventura Gym Local Santa Anita</h3>
                  <ul>
                    <li>Equipo de entrenamiento cardiovascular de alta tecnología.</li>
                    <li>Programas de pérdida de peso y tonificación.</li>
                    <li>Clases de defensa personal y kickboxing.</li>
                    <li>Acceso a fisioterapeutas y masajistas en el lugar.</li>
                  </ul>
                  <a className="enlace-leer" href="locales/santanita.php">
                    Leer más
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

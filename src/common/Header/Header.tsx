import { useEffect } from 'react';
import './Header.css';

export const Header = () => {
  useEffect(() => {
    const CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
    const csUL = document.querySelector("#cs-expanded");

    // Toggle navigation and aria-expanded attribute
    const toggleMenu = () => {
      CShamburgerMenu?.classList.toggle("cs-active");
      CSnavbarMenu?.classList.toggle("cs-active");
      CSbody?.classList.toggle("cs-open");
      ariaExpanded();
    };

    const ariaExpanded = () => {
      const csExpanded = csUL?.getAttribute("aria-expanded");

      if (csExpanded === "false") {
        csUL?.setAttribute("aria-expanded", "true");
      } else {
        csUL?.setAttribute("aria-expanded", "false");
      }
    };

    // Add event listener for mobile menu toggle
    CShamburgerMenu?.addEventListener("click", toggleMenu);

    // Handle dropdown functionality
    const dropDowns = Array.from(
      document.querySelectorAll("#cs-navigation .cs-dropdown")
    );
    for (const item of dropDowns) {
      item.addEventListener("click", () => {
        item.classList.toggle("cs-active");
      });
    }

    // Handle FAQ item functionality
    const faqItems = Array.from(document.querySelectorAll(".cs-faq-item"));
    for (const item of faqItems) {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      CShamburgerMenu?.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <>
      <header id="cs-navigation" className="mb-5">
        <div className="cs-container">
          {/*Nav Logo*/}
          <a
            href="/"
            className="cs-logo"
            aria-label="back to home"
          >
            <img
              src="/src/assets/img/avntgym.png"
              alt="logo"
              width={230}
              height={50}
              aria-hidden="true"
              decoding="async"
            />
          </a>
          {/*Navigation List*/}
          <nav className="cs-nav" role="navigation">
            {/*Mobile Nav Toggle*/}
            <button className="cs-toggle" aria-label="mobile menu toggle">
              <div className="cs-box" aria-hidden="true">
                <span className="cs-line cs-line1" aria-hidden="true" />
                <span className="cs-line cs-line2" aria-hidden="true" />
                <span className="cs-line cs-line3" aria-hidden="true" />
              </div>
            </button>
            <div className="cs-ul-wrapper">
              <ul id="cs-expanded" className="cs-ul" aria-expanded="false">
                <li className="cs-li">
                  <a href="/" className="cs-li-link cs-active">
                    INICIO
                  </a>
                </li>
                <li className="cs-li">
                  <a href="nosotros" className="cs-li-link">
                    NOSOTROS
                  </a>
                </li>
                <li className="cs-li">
                  <a href="servicios" className="cs-li-link">
                    SERVICIOS
                  </a>
                </li>
                <li className="cs-li">
                  <a
                    href="https://aventuragym-mrx.blogspot.com/"
                    className="cs-li-link"
                  >
                    BLOG
                  </a>
                </li>
                <li className="cs-li">
                  <a href="comprar" className="cs-li-link">
                    COMPRAR
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <a href="contacto.php" className="cs-button-solid cs-nav-button">
            CONTACTANOS
          </a>
        </div>
      </header>
    </>
  );
};

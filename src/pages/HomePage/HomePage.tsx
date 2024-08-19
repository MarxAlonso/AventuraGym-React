import { Footer } from "../../common/Footer/Footer";
import { Header } from "../../common/Header/Header";
import { ComunidadGym, Home } from "../../common/Home/Home";
import { Locales } from "../../common/Home/Locales";
import { Productos, VentaProductos } from "../../common/Home/Productos";

export const HomePage = () => {
  return (
    <>
      <Header />
      <br /><br />
      <Home />
      <Productos />
      <VentaProductos />
      <ComunidadGym />
      <Locales />
      <Footer />
    </>
  );
};

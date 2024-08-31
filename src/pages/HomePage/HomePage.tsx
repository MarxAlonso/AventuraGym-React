import { ComunidadGym, Home } from "../../common/Home/Home";
import { Locales } from "../../common/Home/Locales";
import { Productos, VentaProductos } from "../../common/Home/Productos";
import { PrimerosPasos, Services } from "../../common/Home/Services";

export const HomePage = () => {
  return (
    <>
      <br /><br />
      <Home />
      <Productos />
      <VentaProductos />
      <ComunidadGym />
      <br />
      <Locales />
      <Services />
      <PrimerosPasos />
    </>
  );
};

import { Footer } from "../../common/Footer/Footer";
import { Header } from "../../common/Header/Header";
import { Home } from "../../common/Home/Home";
import { Productos, VentaProductos } from "../../common/Home/Productos";

export const HomePage = () => {
  return (
    <>
      <Header />
      <br /><br />
      <Home />
      <Productos />
      <VentaProductos />
      <Footer />
    </>
  );
};

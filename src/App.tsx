import "./index.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { NosotrosPage } from "./pages/NosotrosPage/NosotrosPage";
import { ServiciosPage } from "./pages/ServiciosPage/ServiciosPage";
import { ComprarPage } from "./pages/ComprarPage/ComprarPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/nosotros" element={<NosotrosPage />}></Route>
        <Route path="/servicios" element={<ServiciosPage />}></Route>
        <Route path="/comprar" element={<ComprarPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

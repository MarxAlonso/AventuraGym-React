import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { NosotrosPage } from "./pages/NosotrosPage/NosotrosPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/nosotros" element={<NosotrosPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

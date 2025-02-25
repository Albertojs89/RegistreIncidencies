import { Routes, Route } from "react-router-dom";
import Panell from "./pages/Panell";
import IniciSessio from "./pages/IniciSessio";
import Registre from "./pages/Registre";
import Header from "./components/Header";
import "./App.css";


// inicializamos el localStorage con los arrays vacíos en caso de que no existan
function initLocalStorage() {
  if (!localStorage.getItem("dades_tiquets")) {
    localStorage.setItem("dades_tiquets", JSON.stringify([]));
  }
  if (!localStorage.getItem("dades_usuaris")) {
    localStorage.setItem("dades_usuaris", JSON.stringify([]));
  }
}

// llamada a la funcion
initLocalStorage();


function App() {
  return (
    <div>
      <Header /> {/* El Header estará presente en todas las rutas */}
      <Routes>
        <Route path="/" element={<Panell />} />
        <Route path="/inici-sessio" element={<IniciSessio />} />
        <Route path="/registre" element={<Registre />} />
      </Routes>
    </div>
  );
}

export default App;

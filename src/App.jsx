import { Routes, Route } from "react-router-dom";
import Panell from "./pages/Panell";
import IniciSessio from "./pages/IniciSessio";
import Registre from "./pages/Registre";
import Header from "./components/Header";
import "./App.css";


// inicializamos el localStorage con los arrays vacíos en caso de que no existan

/*Explicación con ejemplo de que hacemos exactamente con esta inicialización
 Ejemplo práctico
 
📌 Supongamos este escenario:

Abres la aplicación por primera vez → localStorage está vacío.
Resultado: Se crea la clave "dades_tiquets" con [] (array vacío).
Luego, agregas tickets manualmente o con código.
Cierras y vuelves a abrir la aplicación.
Resultado: Como "dades_tiquets" ya existe, no se sobrescribe y mantiene los tickets.


*/
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



// App.js    <  ----------------------------------------------------------------------------------
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

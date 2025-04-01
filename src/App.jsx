import { Routes, Route } from "react-router-dom";
import Panell from "./pages/Panell";
import IniciSessio from "./pages/IniciSessio";
import Registre from "./pages/Registre";
import Header from "./components/Header";
import "./App.css";
import NouTiquet from "./pages/NouTiquet";
import AdminUsuaris from "./pages/AdminUsuaris";
import RutaProtegidaAdmin from "./components/RutaProtegida";



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
  console.log("Ejecutando initLocalStorage...");

  if (!localStorage.getItem("dades_tiquets")) {
    console.log("No existen dades_tiquets. Inicializando...");

    const tiquetsEjemplo = [
      { id: 1, codigo: "001", fecha: "2024-03-04", aula: "A1", grupo: "DAW2", ordenador: "PC1", descripcion: "Pantalla azul", alumno: "Juan Pérez", resolt: false },
      { id: 2, codigo: "002", fecha: "2024-03-05", aula: "A2", grupo: "DAW2", ordenador: "PC2", descripcion: "No enciende", alumno: "María López", resolt: false },
      { id: 3, codigo: "003", fecha: "2024-03-06", aula: "A3", grupo: "DAW2", ordenador: "PC3", descripcion: "Teclado roto", alumno: "Carlos Ruiz", resolt: false },
      { id: 4, codigo: "004", fecha: "2024-03-07", aula: "A4", grupo: "DAW2", ordenador: "PC4", descripcion: "Ratón no funciona", alumno: "Laura Gómez", resolt: false },
      { id: 5, codigo: "005", fecha: "2024-03-08", aula: "A1", grupo: "DAW2", ordenador: "PC5", descripcion: "Error en software", alumno: "Ana Fernández", resolt: true },
      { id: 6, codigo: "006", fecha: "2024-03-09", aula: "A2", grupo: "DAW2", ordenador: "PC6", descripcion: "Internet lento", alumno: "Pedro Sánchez", resolt: true },
      { id: 7, codigo: "007", fecha: "2024-03-10", aula: "A3", grupo: "DAW2", ordenador: "PC7", descripcion: "No arranca Windows", alumno: "Marta Díaz", resolt: true }
    ];

    localStorage.setItem("dades_tiquets", JSON.stringify(tiquetsEjemplo));
    console.log("Tiquets iniciales agregados a localStorage:", tiquetsEjemplo);
  } else {
    console.log("dades_tiquets ya existe. No se sobrescriben datos.");
  }

  if (!localStorage.getItem("dades_usuaris")) {
    console.log("No existen dades_usuaris. Inicializando...");

    const usuarisExemple = [
      {
        id: 1,
        email: "admin@fpllefia.com",
        password: "1234",
        rol: "admin"
      }
    ];

    localStorage.setItem("dades_usuaris", JSON.stringify(usuarisExemple));
    console.log("Usuario admin creado por defecto:", usuarisExemple);
  }
}


// Llamada a la función para inicializar datos en localStorage
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
        <Route path="/nou-tiquet" element={<NouTiquet />} />
        <Route path="/admin-usuaris" element={
          <RutaProtegidaAdmin>
            <AdminUsuaris />
          </RutaProtegidaAdmin>
        } />
        

      </Routes>
    </div>
  );
}

export default App;

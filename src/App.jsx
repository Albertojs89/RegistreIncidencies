import { Routes, Route } from "react-router-dom";
import Panell from "./pages/Panell";
import IniciSessio from "./pages/IniciSessio";
import Registre from "./pages/Registre";
import Header from "./components/Header";
import "./App.css";

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

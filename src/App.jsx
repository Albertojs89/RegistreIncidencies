import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from "react-router-dom";
import Panell from "./pages/Panell";
import "./App.css";
import IniciSessio from "./pages/IniciSessio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h2>Página de inicio</h2>} />
      <Route path="/inici-sessio" element={<IniciSessio />} />
      <Route path="/registre" element={<h2>Página de Registro</h2>} />
    </Routes>
  );
}

export default App;

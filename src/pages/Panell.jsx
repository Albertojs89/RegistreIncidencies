import React from "react";
import TiquetsPendents from "../components/TiquetsPendents";
import TiquetsResolts from "../components/TiquetsResolts";
import { useNavigate } from "react-router-dom";

export default function Panell() {
  const navigate = useNavigate();

  return (
    
    <>
      <main className="container mt-5">
        <h1>Administración de incidencias</h1>
        <button
          className="btn btn-primary mb-4"
          onClick={() => navigate("/nou-tiquet")}
        >
          + Nou Tiquet
        </button>

        <TiquetsPendents />
        <TiquetsResolts />
      </main>
    </>
  );
}

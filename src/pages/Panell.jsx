import React from "react";
import TiquetsPendents from "../components/TiquetsPendents";
import TiquetsResolts from "../components/TiquetsResolts";

export default function Panell() {
  return (
    <>
      <main className="container mt-5">
        <h1>Administración de incidencias</h1>
        <TiquetsPendents />
        <TiquetsResolts />
      </main>
    </>
  );
}

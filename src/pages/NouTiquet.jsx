import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NouTiquet() {
  const [codigo, setCodigo] = useState("");
  const [fecha, setFecha] = useState("");
  const [aula, setAula] = useState("");
  const [grupo, setGrupo] = useState("");
  const [ordenador, setOrdenador] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [alumno, setAlumno] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const dadesTiquets = JSON.parse(localStorage.getItem("dades_tiquets")) || [];

    const nouTiquet = {
      id: Date.now(),
      codigo,
      fecha,
      aula,
      grupo,
      ordenador,
      descripcion,
      alumno,
      resolt: false,
      comentaris: [],
    };

    localStorage.setItem("dades_tiquets", JSON.stringify([...dadesTiquets, nouTiquet]));
    alert("✅ Tiquet creat correctament!");
    navigate("/"); // redirigir al Panell
  }

  return (
    <div className="container mt-5">
      <h1>Nou Tiquet</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Codi"
          className="form-control mb-2"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          required
        />
        <input
          type="date"
          className="form-control mb-2"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Aula"
          className="form-control mb-2"
          value={aula}
          onChange={(e) => setAula(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Grup"
          className="form-control mb-2"
          value={grupo}
          onChange={(e) => setGrupo(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Ordinador"
          className="form-control mb-2"
          value={ordenador}
          onChange={(e) => setOrdenador(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripció de la incidència"
          className="form-control mb-2"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nom de l'alumne"
          className="form-control mb-3"
          value={alumno}
          onChange={(e) => setAlumno(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">
          Crear Tiquet
        </button>
      </form>
    </div>
  );
}

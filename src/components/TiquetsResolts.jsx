import React, { useState, useEffect } from "react";

export default function TiquetsResolts() {
  const [tiquets, setTiquets] = useState([]);

  useEffect(() => {
    const dadesTiquets = JSON.parse(localStorage.getItem("dades_tiquets")) || [];
    const tiquetsResolts = dadesTiquets.filter(tiquet => tiquet.resolt);
    setTiquets(tiquetsResolts);
  }, []);

  return (
    <div>
      <h2 className="mt-5">Tickets resueltos</h2>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Código</th>
            <th>Fecha</th>
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripción</th>
            <th>Alumno</th>
          </tr>
        </thead>
        <tbody>
          {tiquets.length > 0 ? (
            tiquets.map((tiquet) => (
              <tr key={tiquet.codigo}>
                <td>{tiquet.codigo}</td>
                <td>{tiquet.fecha}</td>
                <td>{tiquet.aula}</td>
                <td>{tiquet.grupo}</td>
                <td>{tiquet.ordenador}</td>
                <td>{tiquet.descripcion}</td>
                <td>{tiquet.alumno}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No hay tickets resueltos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

import React, { useState, useEffect } from "react";

export default function TiquetsPendents() {
  const [tiquets, setTiquets] = useState([]);

  useEffect(() => {
    const dadesTiquets = JSON.parse(localStorage.getItem("dades_tiquets")) || [];
    const tiquetsPendents = dadesTiquets.filter(tiquet => !tiquet.resolt);
    setTiquets(tiquetsPendents);
  }, []);

  return (
    <div>
      <h2 className="mt-5">Tickets pendientes</h2>
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
            <th>Acciones</th>
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
                <td>
                  <button className="btn btn-success">Resolver</button>
                  <button className="btn btn-danger ms-2">Eliminar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">No hay tickets pendientes</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

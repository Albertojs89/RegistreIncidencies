import React, { useState, useEffect } from "react";
import Comentaris from "./Comentaris";



/*Explicacion flujo de codigo:
 Creamos un estado (tiquets) inicializado como un array vacío ([]).
Este estado almacenará los tickets pendientes que obtendremos de localStorage.

useEffect se activa automaticamente cuando el componente se monta (cuando se carga en pantalla)




*/





export default function TiquetsPendents() {
  const [tiquets, setTiquets] = useState([]);
  const [missatge, setMissatge] = useState("");
  const [tiquetSeleccionat, setTiquetSeleccionat] = useState(null);



  useEffect(() => {
    const dadesTiquets = JSON.parse(localStorage.getItem("dades_tiquets")) || [];
    const tiquetsPendents = dadesTiquets.filter(tiquet => !tiquet.resolt);
    setTiquets(tiquetsPendents);
  }, []);

  
  //funciones manejadores de Eliminar y Resolver ------------------------------------------------


  // Función para eliminar un tiquet
    function handleEliminarTiquet(id) {
  // Obtener todos los tiquets
  const dadesTiquets = JSON.parse(localStorage.getItem("dades_tiquets")) || [];

  // Filtrar quitando el que tiene ese id
  const nousTiquets = dadesTiquets.filter(tiquet => tiquet.id !== id);

  // Guardar en localStorage el array actualizado
  localStorage.setItem("dades_tiquets", JSON.stringify(nousTiquets));

  // Actualizar el estado solo con los pendientes (excluyendo el eliminado)
  const pendents = nousTiquets.filter(tiquet => !tiquet.resolt);
  setTiquets(pendents);
  setMissatge("❌ Ticket eliminado correctamente.");
  setTimeout(() => setMissatge(""), 3000);

}


    // Función para resolver un tiquet
      function handleResoldre(id) {
    // 1. Obtenemos los tiquets actuales
    const dadesTiquets = JSON.parse(localStorage.getItem("dades_tiquets")) || [];

    // 2. Actualizamos el tiquet correspondiente marcándolo como resuelto
    const tiquetsActualitzats = dadesTiquets.map((tiquet) => {
      if (tiquet.id === id) {
        return { ...tiquet, resolt: true };
      }
      return tiquet;
    });

 



    // 3. Guardamos el array actualizado en localStorage
    localStorage.setItem("dades_tiquets", JSON.stringify(tiquetsActualitzats));

    // 4. Actualizamos el estado para refrescar la tabla de pendientes
    const tiquetsPendents = tiquetsActualitzats.filter((tiquet) => !tiquet.resolt);
    setTiquets(tiquetsPendents);
    setTiquets(tiquetsPendents);
    setMissatge("✔️ Ticket marcado como resuelto correctamente.");
    setTimeout(() => setMissatge(""), 3000);

  }
function tancarModalComentaris() {
  setTiquetSeleccionat(null);
}


  return (
    <div>
      {missatge && (
        <div className="alert alert-success mt-3" role="alert">
          {missatge}
        </div>
      )}
{/* “Si missatge tiene algún valor (no es null, undefined o cadena vacía), entonces muestra este <div> con el contenido del mensaje dentro”. */}
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
              <tr key={tiquet.id}>
                <td>{tiquet.codigo}</td>
                <td>{tiquet.fecha}</td>
                <td>{tiquet.aula}</td>
                <td>{tiquet.grupo}</td>
                <td>{tiquet.ordenador}</td>
                <td>{tiquet.descripcion}</td>
                <td>{tiquet.alumno}</td>
                <td>
                  <button className="btn btn-success"onClick={() => handleResoldre(tiquet.id)}>Resolver</button>

                  <button className="btn btn-danger ms-2" onClick={() => handleEliminarTiquet(tiquet.id)}>Eliminar</button>
                 <button
                    className="btn btn-info"
                    title="Ver comentarios"
                    onClick={() => setTiquetSeleccionat(tiquet)}
                  >
                    <i className="bi bi-chat-left-text"></i>
                  </button>
                <button
                  className="btn btn-warning ms-2"
                  title="Añadir comentario"
                  onClick={() => setTiquetSeleccionat(tiquet)}
                >
                  <i className="bi bi-pencil"></i>
                </button>

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
      {tiquetSeleccionat && (
  <Comentaris tiquet={tiquetSeleccionat} onTancar={tancarModalComentaris} />
)}

    </div>
  );
}

import React, { useState, useEffect } from "react";

export default function AdminUsuaris() {
  const [usuaris, setUsuaris] = useState([]);

  // Al montar el componente, cargamos los usuarios del localStorage
  useEffect(() => {
    const dades = JSON.parse(localStorage.getItem("dades_usuaris")) || [];
    setUsuaris(dades);
  }, []);

  // Función que se activa al cambiar el rol de un usuario
  function handleCanviRol(id, nouRol) {
    const usuarisActualitzats = usuaris.map((usuari) =>
      usuari.id === id ? { ...usuari, rol: nouRol } : usuari
    );

    setUsuaris(usuarisActualitzats);
    localStorage.setItem("dades_usuaris", JSON.stringify(usuarisActualitzats));
  }

  return (
    <div className="container mt-5">
      <h1>Administració d'usuaris</h1>

      {usuaris.length > 0 ? (
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Email</th>
              <th>Contrasenya</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {usuaris.map((usuari, index) => (
              <tr key={index}>
                <td>{usuari.email}</td>
                <td>{usuari.password}</td>
                <td>
                  <select
                    className="form-select"
                    value={usuari.rol || "alumne"}
                    onChange={(e) => handleCanviRol(usuari.id, e.target.value)}
                  >
                    <option value="alumne">Alumne</option>
                    <option value="professor">Professor</option>
                    <option value="admin">Administrador</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hi ha usuaris registrats.</p>
      )}
    </div>
  );
}

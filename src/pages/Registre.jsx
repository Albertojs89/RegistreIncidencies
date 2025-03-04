import React, { useState } from "react";

export default function Registre() {
  const [email, setEmail] = useState(""); // Estado para el email
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [mensaje, setMensaje] = useState(""); // Estado para mostrar mensajes al usuario

 const handleSubmit = (e) => {
  e.preventDefault(); // Evita recargar la página

  let usuariosActuales = JSON.parse(localStorage.getItem("dades_usuaris")) || [];

  // Verificar si el usuario ya existe
  let usuarioExiste = usuariosActuales.some(user => user.email === email);

  if (usuarioExiste) {
    setMensaje("⚠ El usuario ya está registrado.");
    return; // Detenemos la ejecución para que no se duplique
  }

  // Si el usuario no existe, lo registramos
  let nuevoUsuario = { email, password, rol: "usuario" };
  usuariosActuales.push(nuevoUsuario);
  localStorage.setItem("dades_usuaris", JSON.stringify(usuariosActuales));

  // Limpiar formulario y mostrar mensaje de éxito
  setEmail("");
  setPassword("");
  setMensaje("✅ Usuario registrado correctamente.");
};


  return (
    <main className="container mt-5">
      <div className="pt-5">
        <h1 className="w-100 text-center">Registro</h1>
        <form onSubmit={handleSubmit} className="form p-4 border shadow bordered mt-5 mx-auto" style={{ width: "400px" }}>
          <label htmlFor="email" className="mt-2 form-label">User:</label>
          <input type="email" className="form-control" placeholder="usuario@mail.com" 
                 value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="pass" className="mt-2 form-label">Contraseña:</label>
          <input type="password" className="form-control" 
                 value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit" className="mt-4 w-100 btn btn-primary">Registrar</button>

          {mensaje && <p className="text-success mt-3">{mensaje}</p>}
        </form>
      </div>

      {/* Modal (sin cambios) */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Observaciones</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Código incidencia: <span>123546</span></p>
              <label htmlFor="comentario" className="form-label">Comentario:</label>
              <input className="form-control" placeholder="Este es un comentario sobre esta incidencia" />
              <p className="small text-end">Autor: <span>Pepe Loco</span></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary">Guardar cambios</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

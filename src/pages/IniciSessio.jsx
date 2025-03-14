import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function IniciSessio() {

  function handleLogin(e) {
  e.preventDefault(); //  esto evita que el formulario recargue la página
  console.log("Usuario",email);

  //cogemos la array de dades usuaris y la guardamos en usuaris 
  const usuaris = JSON.parse(localStorage.getItem("dades_usuaris")) || [];

  // Buscamos si hay un usuario registrado con ese correo y contraseña
  const usuariTrobat = usuaris.find(
    (usuari) => usuari.email === email && usuari.password === password
  );

  if (usuariTrobat) {
    localStorage.setItem("usuari_sessio", JSON.stringify(usuariTrobat));
    alert("Inicio de sesión correcto");
    navigate("/"); // Te lleva al Panel y carga el componente

    // Aquí más adelante podríamos redirigir al panel
  } else {
    alert("Usuario o contraseña incorrectos");
  }

  console.log("Contraseña",password);
}

//estados para el usuario y email ----------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  return (
    <div className="container mt-5">
      <h1 className="w-100 text-center">Login</h1>
      <form
        onSubmit={handleLogin}
        className="form p-4 border shadow bordered mt-5 mx-auto"
        style={{ width: "400px" }}
      >
        <label htmlFor="email" className="mt-2 form-label">
          User:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="usuario@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="pass" className="mt-2 form-label">
          Contraseña:
        </label>
        <input type="password" 
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="submit"
          className="mt-4 w-100 btn btn-primary"
          value="Entrar"
          id="enviar"
        />
      </form>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Observaciones
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Código incidencia: <span>123546</span>
              </p>
              <label htmlFor="comentario" className="form-label">
                Comentario:
              </label>
              <input
                className="form-control"
                placeholder="Este es un comentario sobre esta incidencia"
              />
              <p className="small text-end">
                Autor: <span>Pepe Loco</span>
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-primary">
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Botón para abrir el modal */}
      <button
        type="button"
        className="btn btn-primary mt-4"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Comprobar Modal
      </button>
    </div>
  );
}

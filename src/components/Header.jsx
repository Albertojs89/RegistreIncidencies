import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Header() {
  const [usuariLoguejat, setUsuariLoguejat] = useState(null);
   const navigate = useNavigate();


   //con set interval comprobamos cada segundo el localstorage para cargar el componente y no tener que utilizar F5
   useEffect(() => {
    const interval = setInterval(() => {
      const usuari = JSON.parse(localStorage.getItem("usuari_sessio"));
      setUsuariLoguejat(usuari);
    }, 1000); // Comprobamos cada 1 segundo

    return () => clearInterval(interval); // limpiamos cuando se desmonta
  }, []);


  function handleLogout() {
    localStorage.removeItem("usuari_sessio");
    setUsuariLoguejat(null);
    navigate("/"); // Redirigir al panel o donde prefieras
  }


  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Gestión de incidencias FPLLEFIA</a>
          <div>
            <Link to="/" className="btn btn-secondary ms-2">
              PANEL
            </Link>
            <Link to="/inici-sessio" className="btn btn-secondary ms-2">
              LOGIN
            </Link>
            <Link to="/registre" className="btn btn-secondary ms-2">
              REGISTRO
            </Link>
          </div>
          <div>
          {usuariLoguejat ? (
            <>
              {/* comprobar, si usuari.rol es admin muestra un boton que dirije a route AdminUsuaris.jsx */}
              
              <button className="btn btn-primary ms-2">
                {usuariLoguejat.rol === "admin"? "Gestionar incidencias" : null}
              </button>
              <span>{usuariLoguejat.email}</span>
              <button className="btn btn-outline-danger btn-sm ms-2" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </>
          ) : (
            <span>No hay sesión iniciada</span>
          )}
        </div>

          
        </div>
      </nav>
    </header>
  );
}

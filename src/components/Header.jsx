import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
            <span>administrador@fpllefia.com</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

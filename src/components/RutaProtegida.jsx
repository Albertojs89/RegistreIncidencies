import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RutaProtegidaAdmin({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const usuari = JSON.parse(localStorage.getItem("usuari_sessio"));
    if (!usuari || usuari.rol !== "admin") {
      alert("No tens permís per accedir a aquesta pàgina.");
      navigate("/");
    }
  }, [navigate]);

  return <>{children}</>;
}

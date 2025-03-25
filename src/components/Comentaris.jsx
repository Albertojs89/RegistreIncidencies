import React, { useState, useEffect } from "react";

export default function Comentaris({ tiquet, onTancar }) {
  const [comentaris, setComentaris] = useState([]);
  const [nouComentari, setNouComentari] = useState("");

  useEffect(() => {
    if (tiquet) {
      const dadesTiquets = JSON.parse(localStorage.getItem("dades_tiquets")) || [];
      const tiquetTrobat = dadesTiquets.find((t) => t.id === tiquet.id);
      if (tiquetTrobat && tiquetTrobat.comentaris) {
        setComentaris(tiquetTrobat.comentaris);
      } else {
        setComentaris([]);
      }
    }
  }, [tiquet]);

  function afegirComentari() {
    if (!nouComentari.trim()) return;

    const nou = {
      text: nouComentari,
      autor: JSON.parse(localStorage.getItem("usuari_sessio"))?.email || "Anònim",
      data: new Date().toLocaleString()
    };

    const actualitzats = [...comentaris, nou];
    setComentaris(actualitzats);

    const dadesTiquets = JSON.parse(localStorage.getItem("dades_tiquets")) || [];
    const nousTiquets = dadesTiquets.map((t) => {
      if (t.id === tiquet.id) {
        return { ...t, comentaris: actualitzats };
      }
      return t;
    });

    localStorage.setItem("dades_tiquets", JSON.stringify(nousTiquets));
    setNouComentari("");
  }

  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">
              Comentarios del ticket #{tiquet && tiquet.codigo}
            </h5>
            <button type="button" className="btn-close" onClick={onTancar}></button>
          </div>

          <div className="modal-body">
            {comentaris.length === 0 && <p>No hay comentarios.</p>}

            {comentaris.length > 0 && (
              <ul className="list-group">
                {comentaris.map((c, index) => {
                  return (
                    <li key={index} className="list-group-item">
                      <strong>{c.autor}</strong> ({c.data}): {c.text}
                    </li>
                  );
                })}
              </ul>
            )}

            <textarea
              className="form-control mt-3"
              rows="3"
              value={nouComentari}
              onChange={(e) => setNouComentari(e.target.value)}
              placeholder="Escribe un nuevo comentario"
            ></textarea>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onTancar}>Cerrar</button>
            <button className="btn btn-primary" onClick={afegirComentari}>Añadir comentario</button>
          </div>

        </div>
      </div>
    </div>
  );
}

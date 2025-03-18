import React from "react";

export default function Comentaris({ comentaris = [] }) {
  return (
    <div>
      <h5 className="mt-3">Comentarios</h5>
      {comentaris.length > 0 ? (
        <ul className="list-group">
          {comentaris.map((comentari, index) => (
            <li key={index} className="list-group-item">
              <p><strong>{comentari.autor}</strong> ({comentari.data})</p>
              <p>{comentari.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay comentarios para este tiquet.</p>
      )}
    </div>
  );
}

import React from "react";
import "../assets/styles/Task.css"

export const Task = () => {
  return (
    <div className="d-flex flex-row justify-content-between">
      <div className="d-flex flex-column gap-2 my-3">
        <p className="mb-1 text-white">Tarea:</p>
        <p className="mb-1 text-white">Descripción:</p>
        <p className="mb-1 text-white">Fecha de entrega:</p>
        <p className="mb-1 text-white">Prioridad:</p>
      </div>
      <div className="d-flex flex-row my-2 gap-3 mx-3">
        <button className="btn-general-task buttom-editar">
          EDITAR
        </button>

        {false ? (
          <button className="btn-general-task buttom-completa">
            COMPLETA
          </button>
        ) : (
          <button className="btn-general-task buttom-incompleta">
            INCOMPLETA
          </button>
        )}

        <button className="btn-general-task buttom-eliminar">
          ELIMINAR
        </button>
      </div>
    </div>
  );
};

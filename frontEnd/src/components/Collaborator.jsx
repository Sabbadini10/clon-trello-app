import React from "react";
import "../assets/styles/Collaborator.css"

export const Collaborator = () => {
  return (
    <div  className="card bg-dark bg-opacity-75 mb-3 d-flex flex-row justify-content-between align-items-center">
    <p className="text-white">
      Nombre del colaborador
      <span className="text-white">
        | EMAIL
      </span>{" "}
    </p>
    <div>
          <button 
          className='btn-general'
          >
              Eliminar
          </button>
     
   
    </div>
  </div>
  )}
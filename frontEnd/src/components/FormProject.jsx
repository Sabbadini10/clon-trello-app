import React from "react";
import "../assets/styles/FormProject.css"
function FormProject() {
  return (
    <form className="form-card px-2 py-2 mb-3"
    /* onSubmit={} */
    >
      <div className="mb-1">
        <label className="form-label text-white" htmlFor="name">Nombre Proyecto</label>
        <input className="form-control" id="name" type="text" placeholder="Nombre del proyecto" />
      </div>
      <div className="mb-1" >
        <label className="form-label text-white"  htmlFor="description">Descripción</label>
        <textarea
        className="form-control"
          id="description"
          type="text"
          style={{ resize: "none" }}
          placeholder="Descripción del proyecto"
        />
      </div>
      <div className="mb-1">
        <label className="form-label text-white"  htmlFor="date-expire">Fecha de entrega</label>
        <input className="form-control" id="date-expire" type="date" />
      </div>
      <div className="mb-1">
        <label className="form-label text-white"  htmlFor="client">Nombre Cliente</label>
        <input className="form-control" id="client" type="text" placeholder="Nombre del cliente" />
      </div>
      <div className="d-flex justify-content-center">
      <button className="btn">actualizar/guardar</button>
      </div>
    </form>
  );
};

export default FormProject;

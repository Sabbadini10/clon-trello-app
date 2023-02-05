import React from "react";
import FormProject from "../components/FormProject";
function ProjectEdit() {
  return (
    <>
      <div>
        <h1 className="text-white">Editar proyecto: Nombre del proyecto</h1>
        <div>
          <span className="text-white"><i className="fa-solid fa-trash-can"></i></span>
          <button className="btn"
          /* onClick={} */
          >
            Eliminar
          </button>
        </div>
      </div>
      <div>
        <FormProject />
      </div>
    </>
  );
};

export default ProjectEdit;

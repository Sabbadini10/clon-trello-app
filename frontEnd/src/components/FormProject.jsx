import React from "react";
import { useForm } from "../hooks/useForm";
import { useProjects } from "../hooks/useProjects";
import  Alert  from "./Alert";
import "../assets/styles/FormProject.css";


function FormProject() {
  const {alert, showAlert, storeProject} = useProjects();

  const {formValues, handleInputChange, reset} = useForm({
    name : "",
    description : "",
    dateExpire : "",
    client : ""
  })

  const {name, description, dateExpire, client} = formValues;

  const handleSubmit = (e) => {
    e.preventDefault()
    if([name,description,dateExpire,client].includes("")){
      showAlert("Todos los campos son obligatorios");
      return null
    };

    storeProject({
      name,
      description,
      dateExpire,
      client
    })
  }


  return (
    <form
      className="form-card px-2 py-2 mb-3"
      onSubmit={handleSubmit}
    >
       {
      alert.msg && <Alert {...alert} />
     }
      <div className="mb-1">
        <label className="form-label text-white" htmlFor="name">
          Nombre Proyecto
        </label>
        <input
          className="form-control"
          id="name"
          type="text"
          placeholder="Nombre del proyecto"
          value={name}
          name="name"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-1">
        <label className="form-label text-white" htmlFor="description">
          Descripción
        </label>
        <textarea
          className="form-control"
          id="description"
          type="text"
          style={{ resize: "none" }}
          placeholder="Descripción del proyecto"
          value={description}
          name="description"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-1">
        <label className="form-label text-white" htmlFor="date-expire">
          Fecha de entrega
        </label>
        <input
          className="form-control"
          id="date-expire"
          type="date"
          value={dateExpire}
          name="dateExpire"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-1">
        <label className="form-label text-white" htmlFor="client">
          Nombre Cliente
        </label>
        <input
          className="form-control"
          id="client"
          type="text"
          placeholder="Nombre del cliente"
          value={client}
          name="client"
          onChange={handleInputChange}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn"> {false ? "Actualizar cambios" : "Guardar proyecto"}</button>
      </div>
    </form>
  );
}

export default FormProject;

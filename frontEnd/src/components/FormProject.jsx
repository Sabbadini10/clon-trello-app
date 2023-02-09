import React, { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";
import { useProjects } from "../hooks/useProjects";
import  Alert  from "./Alert";
import "../assets/styles/FormProject.css";
import { useParams } from "react-router-dom";


function FormProject() {
  
  let { alert, showAlert, storeProject } = useProjects();

  const { id } = useParams();

  const inputName = useRef(null);
  const inputDescription = useRef(null);
  const inputDateExpire = useRef(null);
  const inputClient = useRef(null);

  const { loading, formValues, handleInputChange, reset, setFormValues } = useForm({
    name: "",
    description: "",
    dateExpire: "",
    client: "",
  });

  let { name, description, dateExpire, client } = formValues;

  useEffect(() => {
    
    if (id) {

      let project = JSON.parse(sessionStorage.getItem('project'))

      inputName.current.value = project.name;
      inputDescription.current.value = project.description;
      inputDateExpire.current.value = project.dateExpire && project.dateExpire.split("T")[0];
      inputClient.current.value = project.client;

      setFormValues({
        name: project.name,
        description: project.description,
        dateExpire: project.dateExpire.split('T')[0],
        client: project.client,
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, description, dateExpire, client].includes("")) {
      showAlert("Todos los campos son obligatorios");
      return null;
    }

    storeProject({
      id: id ? id : null,
      name,
      description,
      dateExpire,
      client,
    });
  };

  return (
    <form
      className="form-card bg-dark bg-opacity-75 px-2 py-2 mb-3"
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
          ref={inputName}
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
          ref={inputDescription}
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
          ref={inputDateExpire}
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
          ref={inputClient}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn-general"> {false ? "Actualizar cambios" : "Guardar proyecto"}</button>
      </div>
    </form>
  );
}

export default FormProject;

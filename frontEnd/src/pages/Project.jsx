import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import  Alert  from "../components/Alert";
import { Collaborator } from "../components/Collaborator";
import { Task } from "../components/Task";
import { useProjects } from "../hooks/useProjects";
import "../assets/styles/Project.css";


function Project() {
  const { id } = useParams();
  const { loading, alert, getProject, project, deleteProject } = useProjects();

  const { name, description, dateExpire, client } = project;

  useEffect(() => {
    getProject(id);
  }, [id]);

  if (alert.msg) return <Alert {...alert} />;

 

  return (
    <div className="contenedor-proyecto-principal">
      {loading ? (
       <div className="spinner-border text-warning" role="status">
       <span className="visually-hidden">Loading...</span>
     </div>
      ) : (
        <div>
          <div className=" d-flex flex-row w-100 justify-content-between">
            <div className="d-flex flex-column">
            <div>
            <h1 className="text-white">{name}</h1>
            </div>
          <div>
            <p className="text-white">{client}</p>
            </div>
            <div
            /* onClick={} */
            >
              <p className="text-white">{description}</p>
            </div>
            </div>
            <div className="d-flex flex-column my-2 gap-3">
           
            <Link to={`/projects/edit-project/${id}`}>
            <button className="btn-general-project"> <p ><i class="fa-solid fa-pencil"></i>&nbsp; Editar</p>
            </button> 
            </Link>
              
             <button className="btn-general-project">
             <p ><i className="fa-solid fa-plus"></i>&nbsp; Nueva Tarea</p>
             </button>
           </div>
            </div>
          <div>
          {[1,2,3,4].map((task) => (
            <div className="card-project bg-dark bg-opacity-75  d-flex flex-column px-4 my-2">
              <Task />
            </div>
            
          ))}
          </div>
         <div className="d-flex flex-row justify-content-between align-items-center my-2">
            <p className="text-white">Colaboradores</p>
            <button className="btn-general-project"
             /* onClick={}  */
            >
              <p><i className="fa-solid fa-user-plus"></i>&nbsp; Agregar Colaborador</p>
            </button>
          </div>
          {[1,2,3].map((collaborator) => (
            <Collaborator />
          ))} 
        </div>
      )}
    </div>
  );
}

export default Project;

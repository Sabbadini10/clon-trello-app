import React from "react";
import FormProject from "../components/FormProject";
import Swal from "sweetalert2";
import { useProjects } from "../hooks/useProjects";
import { useParams } from "react-router-dom";

function ProjectEdit() {
  const {deleteProject} =useProjects();
  const {id} = useParams()

  const handleDelete = () => {
    Swal.fire({
      title: '¿Estás seguro de eliminar el proyecto?',
      showCancelButton: true,
      confirmButtonColor : 'red',
      confirmButtonText: 'Confirmar',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProject(id)
      } 
    })
  }
  
  return (
    <>
      <div>
        <h1 className="text-white">Editar proyecto: Nombre del proyecto</h1>
        <div>
          <span className="text-white"><i className="fa-solid fa-trash-can"></i></span>
          <button className="btn-general"
           onClick={handleDelete} 
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

/* Swal.fire({
  title: '¿Estás seguro de eliminar el proyecto?',
  showCancelButton: true,
  confirmButtonColor : 'red',
  confirmButtonText: 'Confirmar',
}).then((result) => {
  if (result.isConfirmed) {
    deleteProject(project._id)
  } 
})


const deleteProject = async(id)=>{
  try {
    const token = sessionStorage.getItem('token');

    if(!token){
      return null;
    }

    const config = {
        headers: {
          "Content-Type": "Application/json",
          Authorization: token
        }
    }

    const {data} = await clientAxios.delete(`/projects/${id}`,config)

    const projectsFiltered = projects.filter(project => project._id !== id);

    setProjects(projectsFiltered);

    Toast.fire({
      icon: "success",
      title: data.msg
  }) 

  } catch (error) {
        console.error(error)
        showAlert(error.response? error.response.data.msg : "Hubo un error....", false)
  }
} */

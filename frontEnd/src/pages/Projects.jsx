import React, { useEffect } from 'react'
import ProjectPreview from "../components/ProjectPreview";
import "../assets/styles/Projects.css";
import { useProjects } from '../hooks/useProjects'
import Alert from "../components/Alert"

function Projects() {
  const { loading, alert, projects, getProjects } = useProjects();

  useEffect(() => {
    getProjects();
  }, []);

  if (alert.msg) {
    return <Alert {...alert} />;
  }

  return (
    <div className="bg-dark bg-opacity-75 w-100 d-flex flex-column align-items-center justify-content-center">
      <div className=''>
      <h1 className="text-white text-center display-6">Proyectos</h1>
      </div>
      <div className="d-flex flex-row text-center gap-3">
      {loading ? (
        <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      ) : projects.length ? (
        projects.map((project) => (
          <ProjectPreview key={project._id} {...project} />
        ))
      ) : (
        <p>No hay proyectos agregados</p>
      )}
    </div>
    </div>
  );
}

export default Projects;



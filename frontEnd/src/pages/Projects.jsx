import React, { useEffect } from 'react'
import ProjectPreview from "../components/ProjectPreview";
import "../assets/styles/Projects.css";
import { useProjects } from '../hooks/useProjects'

function Projects() {
  const { loading, alert, projects, getProjects } = useProjects();

  useEffect(() => {
    getProjects();
  }, []);

  if (alert.msg) {
    return <Alert {...alert} />;
  }

  return (
    <div className="projects-container text-white text-center">
      <h1 className="text-white display-6">Proyectos</h1>
      <div>
      {loading ? (
        <p>Cargando...</p>
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



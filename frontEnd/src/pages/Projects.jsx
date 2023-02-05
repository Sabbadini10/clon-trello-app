import React from "react";
import  ProjectPreview  from "../components/ProjectPreview";
import "../assets/styles/Projects.css"

function Projects() {
  return (
    <div className="projects-container text-white text-center">
      <h1 className="text-dark display-6">Proyectos</h1>
      <div>
        <ProjectPreview />
      </div>
    </div>
  );
};

export default Projects;

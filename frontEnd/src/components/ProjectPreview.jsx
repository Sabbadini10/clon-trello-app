import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/ProjectPreview.css";

function ProjectPreview({name, _id, client}) {
 
  return (
    <div className="projects-preview-container bg-dark bg-opacity-75 py-2 my-2 ">
      <p className="text-white">
        {name} <span className="text-white">{" | " + client}</span>
      </p>
      <Link className="text-white" to={`/projects/${_id}`}>
        Ver proyecto
      </Link>
    </div>
  );
}

export default ProjectPreview;

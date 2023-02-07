import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Project.css";

function ProjectPreview(name, _id, client) {
 
  return (
    <div>
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

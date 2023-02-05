import React from "react";
import { Link } from "react-router-dom";
function ProjectPreview() {
  return (
    <div>
      <p className="text-dark">Nombre del proyecto <span className="text-dark">| Cliente</span>
      </p>
      <Link className="text-dark"  to="edit-project/:id">Ver proyecto</Link>
    </div>
  );
};

export default ProjectPreview;
import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Header.css"
function Header() {
  return (
 <nav className="Navbar navbar navbar-expand-lg">
  <div className="container-fluid">
  <h2 className="text-white text-start my-2">Projects Manager</h2>
      <form className="d-flex align-items-center" role="search">
        <input className="form-control me-2" type="search"  placeholder="Buscar proyecto..." aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
          <Link to="/projects"><span className="header-link text-white">Proyectos <i class="fa-solid fa-book"></i></span></Link>
          <button className="btn" type="button" /* onClick={closeSession} */>
            Cerrar sesión
          </button>
    </div>
</nav>
  );
};

export default Header;
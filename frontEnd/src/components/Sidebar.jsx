import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Aside.css"
function Sidebar() {
 return (
 <aside className="aside-card">
 <p className="text-white mx-1 my-2">Hola: Nombre de usuario</p>
 <Link className="text-white mx-1 my-2" to="create-project">Nuevo proyecto <i class="fa-solid fa-plus"></i></Link>
 </aside>
 );
};

export default Sidebar;

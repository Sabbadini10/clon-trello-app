import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Aside.css";



function Sidebar()  {
   
 return (
 <aside className="aside-card">
 <p className="text-white mx-1 my-2">Hola: Usuario</p>
 <Link className="text-white mx-1 my-2" to="create-project">
    <button className="btn-general">
    Nuevo proyecto &nbsp;<i class="fa-solid fa-plus"></i>
    </button>
 </Link>
 </aside>
 );
};

export default Sidebar;

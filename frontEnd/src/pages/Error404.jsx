import React from 'react'
import  Logo  from '../assets/images/ERRORIMAGEN.png'
import '../assets/styles/Error404.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

export const Error404 = () => {
  return (
    <div className='contenedor-error  d-flex flex-column justify-content-center align-items-center '> 
        <img className='contenedor-error-image' src={Logo} /> 
        <nav className="contenedor-error-nav  d-flex my-4 align-items-center justify-content-center">
            <Button><Link className="contenedor-error-nav-link text-dark"  to={"/"}>Volver</Link></Button>
          </nav>
        </div>
  )
}

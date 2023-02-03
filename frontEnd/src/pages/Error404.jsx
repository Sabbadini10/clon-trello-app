import React from 'react'
import Logo from '../../public/ERRORIMAGEN-removebg-preview.png'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

export const Error404 = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center '> 
        <img  src={Logo} /> 
        <nav className="d-flex my-4 align-items-center justify-content-center">
            <Button><Link to={"/"}>Volver</Link></Button>
          </nav>
        </div>
  )
}

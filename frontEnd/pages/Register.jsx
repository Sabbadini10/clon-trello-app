import React from "react";
import { Button, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../styles/Register&Login.css';


export const Register = () => {
  return (
    <div className="contenedorRegister d-flex flex-column align-items-center justify-content-center">
     
      <div className="card d-flex flex-column align-items-center justify-content-center">
      <h1 className="register-titulo text-light">Creá tu cuenta</h1>
        <div className="card2 d-flex flex-column">
        <Form action="">
        <div className=" field mb-2">
        <i class="input-icon fa-regular fa-user"></i>
          <input className="input-field" 
            id="name"
            type="text"
            placeholder="Ingresá tu nombre"
            autoComplete="off"
          />
        </div>
        <div className="field mb-2">
          <i class="input-icon fa-regular fa-envelope"></i>
          <input className="input-field" id="email" type="email" placeholder="Ingresá tu email" />
        </div>
        <div className="field mb-2">
          <i className="input-icon fa-solid fa-lock"></i>
          <input className="input-field" 
            id="password"
            type="password"
            placeholder="Ingrese su contraseña"
          />
        </div>
        <div className="field mb-3">
        <i className="input-icon fa-solid fa-lock"></i>
          <input className="input-field" id="password2" type="password" placeholder="Confirma tu contraseña" />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center mt-1 mb-3">
        <Button className="btn" type="submit">Crear cuenta</Button>
        </div>
        
      </Form>
      <Nav className="d-flex flex-column align-items-center justify-content-center">
        <Link to={"/login"}>¿Estás registrado? Iniciá sesión</Link>
      </Nav>
    </div>
        </div>
      </div>
  );
};

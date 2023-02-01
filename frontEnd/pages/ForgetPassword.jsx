import React from "react";
import { Button, Form, Nav } from 'react-bootstrap';
import '../src/assets/styles/Register&Login.css';
import { Link } from 'react-router-dom';

function ForgetPassword() {
  return (
    <div className="contenedorRegister d-flex flex-column align-items-center justify-content-center">
    <div className="card d-flex flex-column align-items-center justify-content-center">
    <h1 className="register-titulo text-light">Recupera tu acceso</h1>
    <div className="card2 d-flex flex-column">
      <Form action="">
        <div  className="field mb-2">
        <i class="input-icon fa-regular fa-envelope"></i>
          <input className="input-field" id="email" type="email" placeholder="Ingresá tu email" />
        </div>
        <Button className="btn" type="submit">Recuperar contraseña</Button>
      </Form>
      <Nav className="d-flex flex-column align-items-center justify-content-center">
        <Link to={"/register"}>
          ¿No tenés una cuenta?
          Registrate
        </Link>
        <Link to={"/"}>¿Estás registrado? Iniciá sesión</Link>
      </Nav>
      </div>
    </div>
    </div>
  );
};

export default ForgetPassword;



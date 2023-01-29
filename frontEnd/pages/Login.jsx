import React from "react";
import { Button, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Register&Login.css';
import PasswordField from "../src/components/PasswordField";

function Login() {
  return (
    <div className="contenedorRegister d-flex flex-column align-items-center justify-content-center">
     
    <div className="card d-flex flex-column align-items-center justify-content-center">
    <h1 className="register-titulo text-light">Logueate</h1>
      <div className="card2 d-flex flex-column">
      <Form action="">
      <div className="field mb-2">
        <i class="input-icon fa-regular fa-envelope"></i>
        <input className="input-field" id="email" type="email" placeholder="Ingresá tu email" />
      </div>
      <PasswordField />
      <div className="d-flex flex-column align-items-center justify-content-center mt-1 mb-3">
      <Button className="btn" type="submit">Iniciar sessión</Button>
      </div>
      
    </Form>
    <Nav className="d-flex flex-column align-items-center justify-content-center">
    <Link to={"/register"}>¿No tenés una cuenta? Registrate</Link>
     <Link to={"/forgetPassword"}>Olvidé mi password</Link>
    </Nav>
  </div>
      </div>
    </div>
  );
};

export default Login;


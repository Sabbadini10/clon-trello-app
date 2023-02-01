import React from "react";
import { Button, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../src/assets/styles/Register&Login.css';
import PasswordField from "../src/components/PasswordField";
const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;

const handleShowAlert = (msg) => {
  setAlert({
    msg
  });

  setTimeout(() => {
    setAlert({});
  }, 3000);
}

try {

  const {data} = await clientAxios.post('/auth/register',{
    name,
    email,
    password
  });

  console.log(data.msg);
  
} catch (error) {
  console.error(error)
}


function Register() {
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
       
        <PasswordField />
        
        <PasswordField />
        
        <div className="d-flex flex-column align-items-center justify-content-center mt-1 mb-3">
        <Button className="btn" type="submit">Crear cuenta</Button>
        </div>
        
      </Form>
      <Nav className="d-flex flex-column align-items-center justify-content-center">
        <Link to={"/"}>¿Estás registrado? Iniciá sesión</Link>
      </Nav>
    </div>
        </div>
      </div>
      
  );
};


export default Register;
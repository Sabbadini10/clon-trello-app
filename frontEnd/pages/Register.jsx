import React, { useState } from "react";
import { Button, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../src/assets/styles/Register&Login.css';
import PasswordField from "../src/components/PasswordField";
import { useForm } from "../src/hooks/useForm";
import  AlertError  from "../src/components/AlertError";
import  AlertSuccess  from "../src/components/AlertSuccess";
import { clientAxios } from "../config/clientAxios";
import Swal from "sweetalert2";
const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;



function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [alert, setAlert] = useState({});
  const [sending, setSending] = useState(false);

  const {formValues, handleInputChange, reset} = useForm({
    name: "",
    email : "",
    password : "",
    password2 : ""
  });

  const {name, email, password, password2} = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formValues);
    
    if([name,email,password,password2].includes("")){
      handleShowAlert("Todos los campos son obligatorios");
      return null
    };

    if(!exRegEmail.test(email)){
      handleShowAlert("El email tiene un formato inválido");
      return null
    };

    if(password !== password2){
      handleShowAlert("Las contraseñas no coinciden");
      return null
    };

    try {

      setSending(true)

      const {user} = await clientAxios.post('/auth/register',{
        name,
        email,
        password,
        password2
      });

      console.log(user)
      setSending(false)
      
      Swal.fire({
        icon: 'info',
        title: 'Gracias por registrate!',
        text: user.msg,
      });

      reset()
      
    } catch (error) {
      console.error(error);
      handleShowAlert(error.response.data.msg);
      reset()
    }
  }

  const handleShowAlert = (msg) => {
    setAlert({
      msg
    });

    setTimeout(() => {
      setAlert({});
    }, 3000);
  }
  
  return (
    <div className="contenedorRegister d-flex flex-column align-items-center justify-content-center">
     
      <div className="card d-flex flex-column align-items-center justify-content-center">
      <h1 className="register-titulo text-light">Creá tu cuenta</h1>
        <div className="card2 d-flex flex-column">
        <Form onSubmit={handleSubmit}>
        <div className=" field mb-2">
        <i className="input-icon fa-regular fa-user"></i>
          <input className="input-field" 
            id="name"
            type="text"
            placeholder="Ingresá tu nombre"
            autoComplete="off"
            value={name}
            name='name'
            onChange={handleInputChange}
          />
        </div>
        <div className="field mb-2">
          <i className="input-icon fa-regular fa-envelope"></i>
          <input className="input-field" id="email" type="email" placeholder="Ingresá tu email" 
          value={email}
          name='email'
          onChange={handleInputChange}
          />
        </div>
        <div className=" field mb-3">
    <span onClick={() => {setShowPassword(!showPassword)}}>
      {showPassword ? <i className="input-icon fas fa-eye"></i> :  <i className="input-icon fas fa-eye-slash active" ></i>}
      </span>
        <input className="input-field" id="password"  placeholder="Ingresá tu password" 
          value={password}
          name='password'
          onChange={handleInputChange}
          type={showPassword ? 'text' : 'password'}
          />
        </div>
        <div className=" field mb-3">
    <span onClick={() => {setShowPassword2(!showPassword2)}}>
      {showPassword2 ? <i className="input-icon fas fa-eye"></i> :  <i className="input-icon fas fa-eye-slash active" ></i>}
      </span>
        <input className="input-field" id="password2"  placeholder="Confirma tu password" 
          value={password2}
          name='password2'
          onChange={handleInputChange}
          type={showPassword2 ? 'text' : 'password'}
          />
        </div>
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
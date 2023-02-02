import React, {useState} from "react";
import { Button, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../src/assets/styles/Register&Login.css';
import PasswordField from "../src/components/PasswordField";
const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;
import { useForm } from "../src/hooks/useForm";
import { clientAxios } from "../config/clientAxios";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState({});
  const [sending, setSending] = useState(false);

  const {formValues, handleInputChange, reset} = useForm({
    email : "",
    password : "",
  });

  const {email, password} = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    
    if([email,password].includes("")){
      handleShowAlert("Todos los campos son obligatorios");
      return null
    };

    if(!exRegEmail.test(email)){
      handleShowAlert("El email tiene un formato inválido");
      return null
    };

    try {

      setSending(true)

      const {user} = await clientAxios.post('/auth/login',{
        email,
        password
      });

      setSending(false)
      
      Swal.fire({
        icon: 'info',
        title: 'Gracias por registrate!',
        text: user.msg,
      });

      reset()
      
    } catch (error) {
      console.error(error);
      handleShowAlert(error.response.user.msg);
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
    <h1 className="register-titulo text-light">Logueate</h1>
      <div className="card2 d-flex flex-column">
      <Form onSubmit={handleSubmit}>
      <div className="field mb-2">
        <i className="input-icon fa-regular fa-envelope"></i>
        <input className="input-field" id="email" name='email' value={email} type="email" placeholder="Ingresá tu email" onChange={handleInputChange}
/>
      </div>
      <div className=" field mb-3">
    <span onClick={() => {setShowPassword(!showPassword)}}>
      {showPassword ? <i className="input-icon fas fa-eye"></i> :  <i className="input-icon fas fa-eye-slash active" ></i>}
      </span>
        <input className="input-field" id="password" type="password" placeholder="Ingresá tu password" 
          value={password}
          name='password'
          onChange={handleInputChange}
          />
        </div>
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


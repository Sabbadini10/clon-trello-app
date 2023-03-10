import {useState} from "react";
import { Button, Form, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/Register&Login.css';
const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;
import { useForm } from "../hooks/useForm";
import useAuth from "../hooks/useAuth";
import { clientAxios } from "../config/clientAxios";
import Alert from "../components/Alert";


export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState({});
  const {setAuth} = useAuth();
  const navigate = useNavigate()

  const handleShowAlert = (msg, time = true) => {
    setAlert({
      msg,
    });

    if (time) {
      setTimeout(() => {
        setAlert({});
      }, 3000);
    }

    reset();
  };

  const { formValues, handleInputChange, reset } = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      handleShowAlert("Todos los campos son obligatorios");
      return null;
    }

    try {

      const {data} = await clientAxios.post('/auth/login',{
        email,
        password
      })

      console.log(">>>>>>>>>>>>>>>>>>>>>" + data.user)

      setAuth(data.user);
      sessionStorage.setItem('token', data.token);

      navigate('/projects')
      
    } catch (error) {
      console.error(error)
      handleShowAlert(error.response?.data.msg)
    }


  };


  return (
    <div className="contenedorRegister d-flex flex-column align-items-center justify-content-center">
     
    <div className="card bg-dark bg-opacity-75 d-flex flex-column align-items-center justify-content-center">
    <h1 className="register-titulo text-light">Logueate</h1>
    {alert.msg && <Alert  { ...alert}/>}
      <div className="card2 d-flex flex-column">
      <Form onSubmit={handleSubmit} noValidate>
      <div className="field mb-2">
        <i className="input-icon fa-regular fa-envelope"></i>
        <input className="input-field" id="email" name='email' value={email} type="email" placeholder="Ingres?? tu email" onChange={handleInputChange}
/>
      </div>
      <div className=" field mb-3">
    <span onClick={() => {setShowPassword(!showPassword)}}>
      {showPassword ? <i className="input-icon fas fa-eye"></i> :  <i className="input-icon fas fa-eye-slash active" ></i>}
      </span>
        <input className="input-field" id="password" type="password" placeholder="Ingres?? tu password" 
          value={password}
          name='password'
          onChange={handleInputChange}
          />
        </div>
      
      <div className="d-flex flex-column align-items-center justify-content-center mt-1 mb-3">
      <Button className="btn-general" type="submit">Iniciar sesion</Button>
      </div>
      
    </Form>
    <Nav className="d-flex flex-column align-items-center justify-content-center">
    <Link to={"/register"}>??No ten??s una cuenta? Registrate</Link>
     <Link to={"/forgetPassword"}>Olvid?? mi password</Link>
    </Nav>
  </div>
      </div>
    </div>
  );
};


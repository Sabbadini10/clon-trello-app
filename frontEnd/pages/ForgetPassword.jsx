import React, { useState } from "react";
import { clientAxios } from "../config/clientAxios";
import { Button, Form, Nav } from "react-bootstrap";
import "../src/assets/styles/Register&Login.css";
import { Link } from "react-router-dom";
import AlertError from "../src/components/AlertError";
import Swal from "sweetalert2";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      handleShowAlert("El email es obligatorio");
      return null;
    }

    try {
      const { data } = await clientAxios.post(
        `${import.meta.env.VITE_URL_BACKEND}/auth/send-token`,
        {
          email,
        }
      );
      Swal.fire({
        title: "Revisá tu casilla de correo",
        text: data.msg,
        confirmButtonText: "Entendido",
      });
      setEmail("");
    } catch (error) {
      console.error(error);
      handleShowAlert(error.response.data.msg);
      setEmail("");
    }
  };
  const handleShowAlert = (msg) => {
    setAlert({
      msg,
    });
    setTimeout(() => {
      setAlert({});
    }, 3000);
  };

  return (
    <div className="contenedorRegister d-flex flex-column align-items-center justify-content-center">
      <div className="card d-flex flex-column align-items-center justify-content-center">
        <h1 className="register-titulo text-light">Recupera tu acceso</h1>
        <div className="card2 d-flex flex-column">
          <Form onSubmit={handleSubmit}>
            <div className="field mb-2">
              <i class="input-icon fa-regular fa-envelope"></i>
              <input
                className="input-field"
                id="email"
                type="email"
                placeholder="Ingresá tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button className="btn" type="submit" onClick={handleSubmit}>
              Recuperar contraseña
            </Button>
          </Form>
          <Nav className="d-flex flex-column align-items-center justify-content-center">
            <Link to={"/register"}>¿No tenés una cuenta? Registrate</Link>
            <Link to={"/"}>¿Estás registrado? Iniciá sesión</Link>
          </Nav>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;

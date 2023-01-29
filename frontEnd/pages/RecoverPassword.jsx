import React from "react";
import { Button, Form } from 'react-bootstrap';
import '../styles/Register&Login.css';
import PasswordField from "../src/components/PasswordField";

function RecoverPassword() {
  return (
    <div className="contenedorRegister d-flex flex-column align-items-center justify-content-center">
    <div className="card d-flex flex-column align-items-center justify-content-center">
      <h1 className="register-titulo text-light" >Reestablecé tu contraseña</h1>
      <div className="card2 d-flex flex-column">
      <Form action="">
      <PasswordField />
        <Button className="btn" type="submit">Guardar tu contraseña</Button>
      </Form>
      </div>
    </div>
    </div>
  );
};

export default RecoverPassword;

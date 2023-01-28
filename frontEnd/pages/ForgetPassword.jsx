import React from "react";
import { Button, Form, Nav } from 'react-bootstrap';

export const ForgetPassword = () => {
  return (
    <>
      <h1>Recupera tu acceso</h1>
      <Form action="">
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" type="email" placeholder="Ingresá tu email" />
        </div>
        <Button type="submit">Recuperar contraseña</Button>
      </Form>
      <Nav>
        <Link to={"/register"}>
          ¿No tenés una cuenta?
          Registrate
        </Link>
        <Link to={"/"}>¿Estás registrado? Iniciá sesión</Link>
      </Nav>
    </>
  );
};

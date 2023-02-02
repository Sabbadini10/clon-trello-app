import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "../src/assets/styles/Register&Login.css";
import PasswordField from "../src/components/PasswordField";
import { Link, useParams } from "react-router-dom";
import { clientAxios } from "../config/clientAxios";
import  AlertError  from "../src/components/AlertError";

function RecoverPassword() {
  const [alert, setAlert] = useState({});
  const [tokenChecked, setTokenChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [changePassword, setChangePassword] = useState(false);

  const { token } = useParams();
  const navigate = useNavigate();

  const handleShowAlert = (msg) => {
    setAlert({
      msg,
    });
    setTimeout(() => {
      setAlert({});
    }, 3000);
  };

  useEffect(() => {
    const checkToken = async () => {
      try {
        const { data } = await clientAxios.get(`/auth/reset-password?
   token=${token}`);
        setTokenChecked(true);
      } catch (error) {
        console.log(error.response);
        handleShowAlert(error.response?.data.msg);
      }
    };
    checkToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      handleShowAlert("El password es requerido");
      return null;
    }
    try {
      const { data } = await clientAxios.post(
        `/auth/reset-password?token=${token}`,
        {
          password,
        }
      );

      Swal.fire({
        icon: "info",
        title: "Contraseña reseteada!",
        text: data.msg,
        confirmButtonText: "Iniciá sesión",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          setPassword("");
          navigate("/");
        }
      });
    } catch (error) {
      console.error(error);
      handleShowAlert(error.response?.data.msg);
      setPassword("");
    }
  };

  return (
    <div className="contenedorRegister d-flex flex-column align-items-center justify-content-center">
      <div className="card d-flex flex-column align-items-center justify-content-center">
        <h1 className="register-titulo text-light">
          Reestablecé tu contraseña
        </h1>
        <div className="card2 d-flex flex-column">
          <>
            <h1>Reestablecé tu contraseña</h1>

            {alert.msg && <AlertError {...alert} />}
            {tokenChecked ? (
              <>
                <form action="" noValidate onSubmit={handleSubmit}>
                  <div className="my-5">
                    <label htmlFor="password">Nueva contraseña</label>
                   <PasswordField name={password}   placeholder="Escribí tu nueva contraseña"/>
                  </div>
                  <button type="submit">Resetear contraseña</button>
                </form>
              </>
            ) : (
              <nav className="md:flex md:justify-between">
                <Link
                  to={"/register"}
                  className=" text-sky-700 block text-center my-3 text-sm uppercase "
                >
                  ¿No tenés una cuenta? Registrate
                </Link>
                <Link
                  to={"/"}
                  className=" text-sky-700 block text-center my-3 text-sm uppercase "
                >
                  ¿Estás registrado? Iniciá sesión
                </Link>
              </nav>
            )}
          </>
        </div>
      </div>
    </div>
  );
}

export default RecoverPassword;

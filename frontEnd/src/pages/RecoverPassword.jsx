import React, { useState, useEffect } from "react";
import "../assets/styles/Register&Login.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { clientAxios } from "../config/clientAxios";
import  Alert  from "../components/Alert";

function RecoverPassword() {
  const [alert, setAlert] = useState({});
  const [showPassword, setShowPassword] = useState(false);
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
      <div className="card bg-dark bg-opacity-75 d-flex flex-column align-items-center justify-content-center">
        <h1 className="register-titulo text-light">
          Reestablecé tu contraseña
        </h1>
        <div className="card2 d-flex flex-column">
          <>
            {alert.msg && <Alert {...alert} />}
            {tokenChecked ? (
              <>
                <form action="" noValidate onSubmit={handleSubmit}>
                  <div className="my-5">
                    <label htmlFor="password">Nueva contraseña</label>
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
                  </div>
                  <button className="btn-general" type="submit">Resetear contraseña</button>
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

import React, { useEffect, useState } from "react";
import { clientAxios } from "../config/clientAxios";
import { Link, useParams, useNavigate } from "react-router-dom";
import  Alert  from "../components/Alert";
import Swal from "sweetalert2";

function ConfirmAccount() {
  
  const {token} = useParams();

  const navigate = useNavigate();

  const [alert, setAlert] = useState({});

  const handleShowAlert = (msg) => {
    setAlert({
      msg
    });

  };

  useEffect(() => {
   
    const confirmAccount = async () => {
      try {

        const {data} = await clientAxios.get(`/auth/checked?token=${token}`);

        Swal.fire({
          icon: 'success',
          title: 'Felicitaciones!',
          text: data.msg,
          confirmButtonText : "Iniciá sesión",
          allowOutsideClick : false
        }).then(result => {
          if(result.isConfirmed){
            navigate('/')
          }
        })        
      } catch (error) {
        console.error(error)
        handleShowAlert(error.response?.data.msg)
      }
    }

    confirmAccount();

  }, []);
  
  return (
    <>
      <h1 className="text-white text-center">Confirma tu cuenta</h1>
      {alert.msg && (
        <div className="text-center">
          <>
            <Alert {...alert} />
            <nav className="d-flex align-items-center justify-content-center gap-2">
              <Link to={"/register"}>¿No tenés una cuenta? Registrate</Link>
              <Link to={"/"}>¿Estás registrado? Iniciá sesión</Link>
            </nav>
          </>
        </div>
      )}
    </>
  );
}

export default ConfirmAccount;


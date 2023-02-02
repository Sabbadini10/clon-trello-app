import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AlertSuccess = () => {
  Swal.fire({
    title: 'Registro',
    text: 'Usuario registrado con exito',
    icon: 'success',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar!',
    cancelButtonText: 'Cancelar'
  }).then(result => {
    if (result.value) {
      Swal.fire(
        'Eliminado!',
        'Tu archivo ha sido eliminado.',
        'success'
      );
    }
  });
};

export default AlertSuccess;

import Swal from 'sweetalert2';

const AlertError = () => {
  Swal.fire({
    title: 'Error',
    text: 'No podrás revertir esta acción',
    icon: 'error',
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

export default AlertError;

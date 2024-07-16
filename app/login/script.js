// tu_script.js

function recoverPassword() {
    const email = document.getElementById('email').value;
  
    // Aquí puedes implementar la lógica para enviar una solicitud de recuperación de contraseña
    // Por ejemplo, hacer una solicitud HTTP (a través de fetch o axios) al servidor para enviar un correo con un enlace de recuperación.
  
    // Ejemplo simple de validación (reemplazar con tu lógica real):
    if (isValidEmail(email)) {
      alert(`Se ha enviado un correo de recuperación a ${email}`);
      // Aquí podrías redirigir al usuario a una página de confirmación o hacer otras acciones según tu flujo
    } else {
      alert('Por favor ingresa un correo electrónico válido.');
    }
  }
  
  function isValidEmail(email) {
    // Función de validación básica de correo electrónico
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
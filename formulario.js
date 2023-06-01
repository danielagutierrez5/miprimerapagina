document.addEventListener('DOMContentLoaded', function() {
    function showAlert() {
      alert('¡Mirá como aprendí a poner un botón de alerta!');
    }
  
  const form = document.getElementById('myForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
    console.log('Submit event captures');
  });
  
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
    return regex.test(email);
  }
  
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
  
    if (!regex.test(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }
});

window.addEventListener("load", function(){

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
      
        // Obtener los valores de los campos
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
      
        // Validar el nombre de usuario y la contraseña
        if (username === 'admin' && password === 'SLMG+23') {
          // Iniciar sesión exitosa, redirigir al usuario a la página deseada
          window.location.href = 'personal.html';
        } else {
          // Mostrar un mensaje de error en caso de que los datos sean incorrectos
          alert('Nombre de usuario o contraseña incorrectos');
        }
      });

})
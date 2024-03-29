window.addEventListener("load", function () {

  var btnIrRegistro = document.getElementById('message');
  var divRegistro = document.getElementById('div-registro');

  btnIrRegistro.addEventListener('click', () => {
    divRegistro.classList.toggle('show-register');
  });

  // Registro de usuario
  document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los datos del formulario de registro
    const username = document.getElementById('re-username').value;
    const password = document.getElementById('re-password').value;
    const codigo = document.getElementById('codigo').value;

    var cod = 'RJ23';

           // Validar el nombre de usuario
        const usernameValid = /^[a-zA-Z0-9_-]+$/;
      if (!usernameValid.test(username)) {
          alert('El nombre de usuario no debe contener caracteres extraños. Solo se permiten letras, números, guiones y guiones bajos.');
      }

        // Validar la contraseña
        const passwordValid = /^(?=.*[0-9])(?=.*[a-zA-Z]).{4,}$/;
      if (!passwordValid.test(password)) {
          alert('La contraseña debe tener mínimo 4 caracteres y contener al menos un número.');
      }
      if(codigo != cod){
        alert('Para poder registrarse, por favor introduzca el código suministrado')
    }

    // Validar los datos 
    if (username && password && codigo === cod) {

      // Almacenar los datos del usuario en el almacenamiento local
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      divRegistro.classList.remove('show-register');

      // Limpia los campos del formulario de registro
      document.getElementById('re-username').value = '';
      document.getElementById('re-password').value = '';
    
    } 
    else {
      alert('Por favor, completa todos los campos.');
    }
  });



  document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores de los campos
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Verificar los datos de inicio de sesión
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      // Marcar al usuario como "autenticado"
      localStorage.setItem('authenticated', 'true');

       // Iniciar sesión exitosa, redirigir al usuario a la página deseada
      window.location.href = 'personal.html';

      // Limpia los campos del formulario de inicio de sesión
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
    } else {
      alert('Nombre de usuario o contraseña incorrectos.');
    }

  });

})
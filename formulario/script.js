document.getElementById("form-login").addEventListener("submit", function (e) {
  e.preventDefault(); // evita que la página se recargue

  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();
  const mensajeError = document.getElementById("mensaje-error");

  if (usuario === "" || password === "") {
    mensajeError.textContent = "Completa usuario y contraseña.";
    mensajeError.style.display = "block";
    return;
  }

  // Guardamos el usuario para mostrarlo en la página de bienvenida
  localStorage.setItem("usuarioActivo", usuario);

  // Redirigimos a la página de bienvenida
  window.location.href = "bienvenida.html";
});

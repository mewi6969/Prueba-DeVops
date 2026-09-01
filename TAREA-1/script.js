const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const curso = document.getElementById("curso").value;
    const password = document.getElementById("password").value;

    const mensaje = document.getElementById("mensaje");

    // Campos vacíos
    if (
        nombre === "" ||
        correo === "" ||
        telefono === "" ||
        edad === "" ||
        curso === "" ||
        password === ""
    ) {
        mensaje.textContent = "Por favor, complete todos los campos.";
        mensaje.style.color = "red";
        return;
    }

    // Formato de correo
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
        mensaje.textContent = "Ingrese un correo electrónico válido.";
        mensaje.style.color = "red";
        return;
    }

    // Teléfono: solo números, entre 7 y 15 dígitos
    const regexTelefono = /^[0-9]{7,15}$/;
    if (!regexTelefono.test(telefono)) {
        mensaje.textContent = "Ingrese un teléfono válido (solo números).";
        mensaje.style.color = "red";
        return;
    }

    // Edad: número positivo razonable
    const edadNumero = Number(edad);
    if (isNaN(edadNumero) || edadNumero <= 0 || edadNumero > 120) {
        mensaje.textContent = "Ingrese una edad válida.";
        mensaje.style.color = "red";
        return;
    }

    // Contraseña
    if (password.length < 6) {
        mensaje.textContent = "La contraseña debe tener mínimo 6 caracteres.";
        mensaje.style.color = "red";
        return;
    }

    mensaje.textContent = "¡Registro exitoso!";
    mensaje.style.color = "green";

});
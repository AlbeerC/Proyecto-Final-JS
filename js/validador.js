// Validador de formulario

const datos = {
    nombre: "",
    email: "",
    motivo: "",
    mensaje: ""
} 

const formulario = document.querySelector('.formulario');

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    // Validar el Formulario

    const { nombre, email, motivo, mensaje } = datos;

    (nombre === "" || email === "" || motivo === "" || mensaje === "") ? mostrarError() : mostrarMensaje();
});


// Mostrar un mensaje de error si hay al menos un campo vacío
function mostrarError() {
    const alerta = document.createElement("p");
    alerta.innerText = ("Todos los campos son obligatorios");
    alerta.classList.add("error");
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();    // El mensaje desaparece despúes de 3 segundos
    }, 3000);
}


// Mostrar un mensaje de enviado si se llenó correctamente el formulario
function mostrarMensaje() {
    const alerta = document.createElement("p");
    alerta.innerText = ("Mensaje enviado correctamente");
    alerta.classList.add("enviado");
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

// Eventos de los Inputs
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const motivo = document.getElementById("motivo");
const mensaje = document.getElementById("mensaje");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
motivo.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(e.target.value);
}

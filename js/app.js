import { validar } from './validacion.js';
import { habilitarBoton } from './validacion.js';
let campNombre = document.getElementById("nombre");
let campCorreo = document.getElementById("correoelectronico");
let campAsunto = document.getElementById("asunto");
let campMensaje = document.getElementById("mensaje");
let boton = document.getElementById("boton");
campNombre.addEventListener("keyup", habilitarBoton);
campCorreo.addEventListener("keyup", habilitarBoton);
campAsunto.addEventListener("keyup", habilitarBoton);
campMensaje.addEventListener("keyup", habilitarBoton);
boton.addEventListener("click", (event) => {
    event.preventDefault();
    alert("formulario lleno");
});

let inputs = document.querySelectorAll("input");


inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validar(input.target);
    })
})
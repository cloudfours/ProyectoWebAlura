export function validar(input) {
    const tipoInputs = input.dataset.tipo;
    if (valido[tipoInputs]) {
        valido[tipoInputs](input);
    }
    if (input.validity.valid) {
        input.parentElement.classList.remove(".campo-valido");
        input.parentElement.querySelector(".span__input").innerHTML = "";

    } else {
        input.parentElement.classList.add(".campo-error");
        input.parentElement.querySelector(".span__input").innerHTML = mensajeErrores(tipoInputs, input);
    }


}

export function validarcamp(textarea) {
    if (textarea.value.length == 0) {
        alert("textarea vacio");
        return false;
    } else return true;

}

const tipoError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",

];
const mensajeError = {
    nombre: {
        valueMissing: " campo nombre no puede estar vacío"
    },
    correo: {
        valueMissing: " campo de correo no puede estar vacio",
        typeMismatch: "Este correo no es valido por favor ingrese el caracter @"
    },
    asunto: {
        valueMissing: "campo de asunto no puede estar vacio",
        patternMismatch: "El asunto debe debe estar lleno"
    },
    texto: {
        valueMissing: "campo de mensaje no puede estar vacio",
        patternMismatch: "El mensaje debe debe estar lleno"
    }


}



const valido = {
    campos: (input) => valid(input)
}


function valid(input) {
    let mensaje = "";
    input.setCostumValidity(mensaje);
}

function mensajeErrores(tipoInputs, input) {
    let menseje = "";
    tipoError.forEach(function(error) {
        if (input.validity[error]) {
            console.log(tipoInputs, error);
            console.log(input.validity[error]);
            console.log(mensajeError[tipoInputs][error]);
            menseje = mensajeError[tipoInputs][error];
        }
    });
    return menseje;
}

export function habilitarBoton() {
    let campNombre = document.getElementById("nombre").value;
    let campCorreo = document.getElementById("correoelectronico").value;
    let campAsunto = document.getElementById("asunto").value;
    let campMensaje = document.getElementById("mensaje").value;
    let contador = 0;
    if (campNombre === "") {
        contador++;
    }
    if (campCorreo === "") {
        contador++;
    }
    if (campAsunto === "") {
        contador++;
    }
    if (campMensaje === "") {
        contador++;
    }
    if (contador == 0) {
        document.getElementById("boton").disabled = false;


    } else {
        document.getElementById("boton").disabled = true;
    }


}
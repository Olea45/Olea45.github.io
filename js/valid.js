const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
    nombre: false,
    email: false,
    asunto: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
        break;
        case "email":
            validarCampo(expresiones.email, e.target, "email");
        break;
        case "asunto":
            validarCampo(expresiones.nombre, e.target, "asunto");
        break;
    }
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`formcontacto__${campo}`).classList.remove("formcontato__input-incorrecto");
        campos[campo] = true;
    } else { 
        document.getElementById(`formcontacto__${campo}`).classList.add("formcontato__input-incorrecto");
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if(campos.nombre && campos.email && campos.asunto){
        formulario.reset();
    }
});
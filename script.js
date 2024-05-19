function mostrarInicio() {
    ocultarTodos();
    document.getElementById("inicio").style.display = "block";
}

function mostrarAcerca() {
    ocultarTodos();
    document.getElementById("acerca").style.display = "block";
}

function mostrarContacto() {
    ocultarTodos();
    document.getElementById("contacto").style.display = "block";
}
function mostrarPreguntas() {
    ocultarTodos();
    document.getElementById("preguntas").style.display = "block";
}

function ocultarTodos() {
    var elementos = document.getElementsByTagName("article");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = "none";
    }
}


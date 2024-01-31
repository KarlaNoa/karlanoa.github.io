function valida()
{
    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('email').value;
    if (nombre === "" ||email === "") {
        document.getElementById("errorNombre").innerHTML = "¡Por favor, ingresa tu nombre!";
        document.getElementById("errorEmail").innerHTML = "¡Por favor, ingrese su correo!";
        return false;
        } 
        else {
        document.getElementById("errorNombre").innerHTML = "";
        document.getElementById("errorEmail").innerHTML = ""
    }
}
function agregarComentario() {
    var comentario = document.getElementById('comment-input').value;

    if (comentario.trim() !== '') {
        var comentarioElemento = document.createElement('div');
        comentarioElemento.className = 'comment';
        comentarioElemento.textContent = comentario;

        document.getElementById('comments-list').appendChild(comentarioElemento);
        document.getElementById('comment-input').value = '';
    }
}

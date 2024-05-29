console.log("Hola mundo desde nuestro archivo");
alert("Bienvenidos a mi Website")
let mensaje;
let person = prompt("Por favor ingrese su nombre:", "");
if (person == null || person == "") {
    mensaje = "Bienvenido, estas en modo invitado";
} else {
    mensaje = "Bienvenido " + person;
}
document.getElementById("mensaje").innerHTML = mensaje;
function mostrarNombre() {
    const nombre = prompt("¿A quién deseas saludar?");
    if (nombre!== null) {
       document.write("Saludos para:" + nombre);
    } else {
       document.write("El usuario no escribió su nombre");
    }    
}
mostrarNombre();
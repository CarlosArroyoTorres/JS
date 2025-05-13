function CalcularArea(){
    const PI = 3.1416;
    let miRadio = parseFloat(document.getElementById("radio").value);
    let resultado = PI * (miRadio*miRadio);
    let mostrarTexto = document.getElementById("texto");
    let mensaje = "El área del circulo es: " + resultado + "  ";
    //Salida
    mostrarTexto.textContent = mensaje;
    console.log(mensaje);
}
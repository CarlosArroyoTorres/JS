let elementoSegundo = document.getElementById('tiempoElegido');
let elementoColor = document.getElementById('textoColor'); /*este no lleva value, por que no se va a obtener un valor, solo cambiar el color del texto*/
function mostrarTiempos(){
    setTimeout(finalTiempo, 1000 * elementoSegundo.value); 
    console.log(elementoSegundo)
}
function finalTiempo(){
    elementoColor.textContent="Encendido";
    elementoColor.style.color= "green";
}

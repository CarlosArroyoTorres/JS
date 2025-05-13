let elementoSegundo = document.getElementById('tiempo');
let elementotextoAlarma = document.getElementById('textoAlarma');
let elementoAlarma = document.getElementById('audioAlarma');

function verTiempo(){
    setTimeout(comenzarTiempo, 1000 * elementoSegundo.value); /*se ejecuta solo una vez cuando yo lo llame*/
}
function comenzarTiempo(){
    elementotextoAlarma.style.color= "darkblue";
    elementoAlarma.play();
}
function comenzarReloj(){
    setInterval(miReloj,1000); /*este actualiza cada segundo*/
}
function miReloj(){
    let tictac = new Date();/*new sirve para crear objetos*/
    let hora = String(tictac.getHours()).padStart(2, "0");
    let minutos = String(tictac.getMinutes()).padStart(2, "0");
    let segundos = String(tictac.getSeconds()).padStart(2, "0"); /*padStart rellena una cadena desde el inicio*/ 
    let textoHora = hora + ":" + minutos + ":" + segundos;
    elementotextoAlarma.textContent = textoHora
}
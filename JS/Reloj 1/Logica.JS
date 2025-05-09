function marcadordeTiempo(){
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    if(hora < 10){
        hora = "0" + hora;
    }
    if(minutos < 10) {
        minutos = "0" + minutos;
    }
    if(segundos < 10){
        segundos = "0" + segundos;
    }
    let tiempo = hora + ':' + minutos + ':' + segundos;
    let mireloj = document.querySelector('#reloj');
    mireloj.innerHTML = tiempo;
    console.log(tiempo) 
}
setInterval(marcadordeTiempo,1000);
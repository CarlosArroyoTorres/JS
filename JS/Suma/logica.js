function sumar(){
   /*alert("Procesando....")*/
   /*let valor1 = Number(document.getElementById("valor1").value)
   let valor2 = Number(document.getElementById("valor2").value)
   let suma = valor1 + valor2
   document.getElementById("numero").textContent = "la suma es: " + suma
   console.log("la suma es: " + suma)*/
   let numeroUno = document.getElementById("valor1").value;
   let numeroDos = document.getElementById("valor2").value;
   let mostrarTexto = document.getElementById("texto");
   let num1 = parseInt(numeroUno);
   let num2 = parseInt(numeroDos);
   let resultado = num1 + num2;
   let mensaje = 'El resultado de la suma es: ' + resultado;
   mostrarTexto.textContent = mensaje;
   console.log('El resultado de la suma es: ' + resultado);
}
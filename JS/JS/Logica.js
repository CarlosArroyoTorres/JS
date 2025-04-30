function saludar(){
    /*
    var -- no se utiliza porque se sobre escribe
    let -- es unica, lo que significa que solo se usa una vez. Ej: nombreUsuario
    const -- pon inmutables, no cambia durante la ejecución del programa. Ej: pi=3.14
    */ 
   /* alert("Hola Estimado " + document.getElementById("nombre").value + " a Java Script");*/
   let nombreUsuario = document.getElementById("nombre").value;
   let edadUsuario = document.getElementById("edad").value;
   let generaTexto = document.getElementById("texto");
   let mensaje = "Hola Estimado " + nombreUsuario + " y su edad es: " + edadUsuario + " años ";
   generaTexto.textContent = mensaje;
   console.log(mensaje)
}
/*las salidas que tiene JS es por alert, o por consola y el DOM*/
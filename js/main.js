alert("Bienvenido al juego *** PUNTERIA ***");
var nombre = prompt("Ingresa tu Nombre");
//EJERCICIO CLICK MOUSES Y CIRCULO AZUL ROJO VERDE
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var radio = 10;
var xAleatorio;
var yAleatorio;
pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,600,400);

//FUNCION PARA CREAR EL CRCULO
function pintarCirculo(x,y,radio,color) {
    pincel.fillStyle = color;
    pincel.beginPath();
    //MATH.PI ES MAS PRO PONERLO ASI QUE 3.14
    pincel.arc(x,y,radio,0,2* Math.PI);
    pincel.fill();
}
 //FUNCION LIMPIAR PANTALLA
 function limpiarPantalla() {
    pincel.clearRect(0,0,600,400)
}
//FUNCION ACUTALIZAR PANTALLA
var x = 0
function acutalizarPantalla() {
    //LLAMAR A LA FUNCION LIMPIAR PANTALLA
    limpiarPantalla();
    //SORTEAR OBJETIVO
    xAleatorio = sortearPosicion(600); 
    yAleatorio = sortearPosicion(400);
    //LLAMAR A LA FUNCION PNTARCIRCULO DONDE X PARTE DE 0 CON EL VAR X, 20 ES EL EJE Y Y 10 ES EL TAMAÑO DEL CIRCULO
    creandoObjetivo(xAleatorio,yAleatorio);
    //INCREMENTAR LA X 
    x++;
}

//VAMOS A CREAR UNA FUNCION PARA DISEÑAR EL OBJETIVO
function creandoObjetivo(x,y) {
    //LLAMAR A LA FUNCION PINTARCIRCULO CON LOS PARAMETROS X Y  RADIO=TAMAÑO DEL CIRCULO Y COLOR
    pintarCirculo(x,y,radio + 20,"red");
    pintarCirculo(x,y,radio + 10,"white");
    pintarCirculo(x,y,radio,"red");
}

//SORTEAR POSICION DEL OBJETIVO CREANDO UNA FUNCION CON UN EVENTO MAXIMO QUE SERA EL PORTE DEL CANVAS 600 * 400
function sortearPosicion(maximo) {
    return Math.floor(Math.random()* maximo);
}

//AHORA REALIZAR UNA FUNCION QUE LE ACHUNTE AL BLANCO
function disparar(evento){
    //REALIZAR DOS VAR PARA QUE NO SALGA DE LA IZQUIERDA Y ARRIBA EL BLANCO
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;

    if ((x < xAleatorio + radio) &&
        (x > xAleatorio - radio) &&
        (y < yAleatorio + radio) &&
        (y > yAleatorio - radio)) {
        alert("SOLO FUE SUERTE " + "*** " + nombre + " ***");
    }
}
//LLAMAR AL CANVAS CON ONCLICK Y PONER LA FUNCION DISPARAR
pantalla.onclick = disparar;

//SETINTERVAL ES LA ANIMACION DONDE TIENE 2 PARAMETROS EL ACTUALIZARPANTALLA Y LOS MILISEGUNDOS DONDE MAS ALTO EL NUERO MAS LENTO ES
setInterval(acutalizarPantalla,1000);
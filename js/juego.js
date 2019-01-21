function Fecha() {
     var greeting;
     var time = new Date().getHours();
     if (time < 10) {
       greeting = "Buenos dias";
       body= document.getElementById('body');
       document.bgColor = 'lightblue';
       document.getElementById('myImage').src='img/dias.jpg'
     } else if (time < 20) {
       greeting = "Buenas tardes";
       document.bgColor = 'orange';
       document.getElementById('myImage').src='img/tardes.jpg'
     } else {
       greeting = "Buenas noches";
       document.bgColor = 'purple';
       document.getElementById('myImage').src='img/noches.jpg'
     }
     document.getElementById("fecha").innerHTML = greeting;
}


var numeroAdivinar=Math.floor((Math.random()*10)+1);
var contadorIntentos=0;
var respuestas = "";

function adivinar(){
    if(contadorIntentos<5){
        var numero=document.getElementById("numero").value;
        if (numero>0 && numero <=10){
            contadorIntentos+=1;
            if (numero>numeroAdivinar){
                respuestas = "El numero que buscas es inferior";

            }else if(numero<numeroAdivinar){
                 respuestas = "El numero que buscas es superior";

            }else{
                respuestas = "Has acertado! Felicidades"
                fin();
            }
            document.getElementById("numero").value="";
        }else{
         respuestas = "Ingresa un numero menor a 10"
        }
    }else{
       respuestas= "Perdiste :(";
       fin();
    }
   document.getElementById("respuestaCompu").innerHTML=respuestas;
   return false;
}

function fin(){
    // deshabilitamos el casilla de entrar el numero, y el
    // boton de enviar
    document.getElementById("numero").disabled=true;
    document.getElementById("btnEnviar").disabled=true;
}


function caracola(){
while(true)
{

var Usuario = prompt("");
var Computadora = Math.random();
if (Computadora < 0.16) {
    alert("Si");
} else if(Computadora <= 0.32) {
    alert("Probablemente");
} else if(Computadora <=.48){
    alert("Creo que no");
}else if(Computadora <=.64){
    alert("Prueba preguntando de nuevo");
}else if(Computadora <=.80){
    alert("Algun dia");
}else if(Computadora <=1){
    alert("Muy pronto");
}
}
}

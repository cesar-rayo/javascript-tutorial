var grafico = document.getElementById("grafico");
var ancho = grafico.width / 2;
var ancho_total = grafico.width;
var alto = grafico.height / 2;
var alto_total = grafico.height;
var lienzo = grafico.getContext("2d");


function dibujarLinea(color, x1, y1, x2, y2){
  lienzo.strokeStyle = color;
  lienzo.beginPath();
  //lienzo.moveTo(X,Y);
  lienzo.moveTo(x1,y1);
  lienzo.lineTo(x2,y2);
  lienzo.stroke();
  lienzo.closePath(); 
}

function dibujarTapete1(color, lineas, espacio){
  /*
   0,150 - 150,140 0
  10,150 - 150,130 1
  20,150 - 150,120 2
  */
  var x0, y2;
  for(l=0; l < lineas; l++){
    x0 = l * espacio
    y2 = alto - ((l+1) * espacio)
    dibujarLinea(color, x0, alto, alto, y2);
  }  
}

function dibujarTapete2(color, lineas, espacio){
  /*
  300,150 - 150,140 0
  290,150 - 150,130 1
  280,150 - 150,120 2
  */
  var x0, y2;
  for(l=0; l < lineas; l++){
    x0 = ancho_total - (l* espacio)
    y2 = alto - ((l+1)* espacio)
    dibujarLinea(color, x0, alto, alto, y2);
  }  
}

function dibujarTapete3(color, lineas, espacio){
  /*
    0,150 - 150,160 0
   10,150 - 150,170 1
   20,150 - 150,180 2
  */
  var x0, y2;
  for(l=0; l < lineas; l++){
    x0 = l* espacio
    y2 = alto + ((l+1)* espacio)
    dibujarLinea(color, x0, alto, ancho, y2);
  }  
}

function dibujarTapete4(color, lineas, espacio){
  /*
   300,150 - 150,160 0
   290,150 - 150,170 1
   280,150 - 150,180 2
  */
  var x0, y2;
  for(l=0; l < lineas; l++){
    x0 = ancho_total - (l* espacio)
    y2 = alto + ((l+1)* espacio)
    dibujarLinea(color, x0, alto, ancho, y2);
  }  
}

var inputLineas = document.getElementById("txtLineas");
var btnButton = document.getElementById("btnEnviar");

btnButton.addEventListener("click", dibujoClick);

function dibujoClick(){
  var numLineas = parseInt(inputLineas.value);
  console.log(ancho);
  var espacio = ancho / numLineas;
  dibujarTapete1("blue", numLineas, espacio);
  dibujarTapete2("red", numLineas, espacio);
  dibujarTapete3("red", numLineas, espacio);
  dibujarTapete4("blue", numLineas, espacio);
}

dibujarLinea("black", ancho, 0, ancho, alto_total);
dibujarLinea("black", 0, ancho, ancho_total, alto);


// json
var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

var grafico = document.getElementById("dibujo");
var contexto = grafico.getContext("2d");

var x0 = 150;
var y0 = 150;
var colorLinea = "#AAAAFF"
var distancia = 10;

//Oprimir tecla keydown, soltar tecla keyup
//document.addEventListener("keydown", dibujarLinea);
document.addEventListener("keydown", capturarTecla);

//Capturar eventos del Mouse
document.addEventListener("mousedown", empezarDibujo);
document.addEventListener("mouseup", pararDibujo);
document.addEventListener("mousemove", capturarMouse);
var dibujar = false;

//punto inicial
dibujarLinea(colorLinea,x0-1,y0-1,x0+1,y0+1,contexto);

function dibujarLinea(color, x1, y1, x2, y2, lienzo){
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3
  lienzo.beginPath();
  lienzo.moveTo(x1,y1);
  lienzo.lineTo(x2,y2);
  lienzo.stroke();
  lienzo.closePath(); 
}

//Variable obtenida de addEventListener
// 37,38,39,40 LEFT, UP, RIGHT, DOWN
function capturarTecla(evento){
  switch(evento.keyCode){
    case teclas.LEFT:
      dibujarLinea(colorLinea, x0, y0, x0 - distancia, y0, contexto);
      x0 = x0 - distancia;
    break;
    case teclas.UP:
      dibujarLinea(colorLinea, x0, y0, x0, y0 - distancia, contexto);
      y0 = y0 - distancia;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorLinea, x0, y0, x0 + distancia, y0, contexto);
      x0 = x0 + distancia;
    break;
    case teclas.DOWN:
      dibujarLinea(colorLinea, x0, y0, x0, y0 + distancia, contexto);
      y0 = y0 + distancia;
    break;
    default:
      console.log("Otra tecla");
    break;
  }
}

function empezarDibujo(event){
  dibujar = true;
}

function pararDibujo(event){
  dibujar = false;
}

function capturarMouse(event){
  if(event.target == grafico && dibujar){
    //console.log(x0, y0, event.layerX, event.layerY);
    dibujarLinea(colorLinea, x0, y0, event.layerX, event.layerY, contexto);
    x0 = event.layerX;
    y0 = event.layerY;
  }
}


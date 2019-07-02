/*
Math.ceil(3.78)  -> 4
Math.floor(3.78) -> 3
Math.random() -> 0,001 0,999 %

customRandom(min, max);
Math.floor(Math.random() * (max - min + 1)) + min
*/

var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

var dibujo = document.getElementById("mapa");
var contexto = dibujo.getContext("2d");

var cerdoX;
var cerdoY;
document.addEventListener("keydown", moverCerdo);

var mapa = {
  url: "./imagenes/tile.png",
  loaded: false
}

var vaca = {
  url: "./imagenes/vaca.png",
  loaded: false
}

var cerdo = {
  url: "./imagenes/cerdo.png",
  loaded: false
}

var pollo = {
  url: "./imagenes/pollo.png",
  loaded: false
}

var cantVacas = customRandom(0,5);
var cantPollos = customRandom(0,5);

console.log("Vacas: " + cantVacas);
console.log("Pollos: " + cantPollos);

mapa.imagen = loadImage(mapa.url);
mapa.imagen.addEventListener("load", cargarMapa);

vaca.imagen = loadImage(vaca.url);
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = loadImage(pollo.url);
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = loadImage(cerdo.url);
cerdo.imagen.addEventListener("load", cargarCerdos);

function loadImage(src_path){
  var image = new Image();
  image.src = src_path;
  return image
}

function customRandom(min, max){
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

function cargarMapa(){
  mapa.loaded = true;
  dibujarMapa();
}

function cargarVacas(){
  vaca.loaded = true;
  dibujarMapa();
}

function cargarPollos(){
  pollo.loaded = true;
  dibujarMapa();
}

function cargarCerdos(){
  cerdo.loaded = true;
  dibujarMapa();
}

function dibujaEnCuadrilla(imagen){
  var x = customRandom(0, 7);
  var y = customRandom(0, 7);
  x = x * 60;
  y = y * 60;
  contexto.drawImage(imagen, x, y);
}

function dibujarMapa(){
  if(mapa.loaded){
    contexto.drawImage(mapa.imagen, 0, 0);
  }
  if(vaca.loaded){
    // Mapa de 500*500 imagenes de 80*80 limites 0-420
    for(var i=0; i < cantVacas; i++){
      dibujaEnCuadrilla(vaca.imagen);
    }
  }
  if(cerdo.loaded){
    cerdoX = customRandom(0, 7);
    cerdoY = customRandom(0, 7);
    cerdoX = cerdoX * 60;
    cerdoY = cerdoY * 60;
    contexto.drawImage(cerdo.imagen, cerdoX, cerdoY);
  }
  if(pollo.loaded){
    for(var i=0; i < cantPollos; i++){
      dibujaEnCuadrilla(pollo.imagen);
    }
  }
}

function moverCerdo(evento){
  var distancia = 30;
  switch(evento.keyCode){
    case teclas.LEFT:
      cerdoX = cerdoX - distancia;
      contexto.drawImage(cerdo.imagen, cerdoX, cerdoY);
    break;
    case teclas.UP:
      cerdoY = cerdoY - distancia;
      contexto.drawImage(cerdo.imagen, cerdoX, cerdoY);
    break;
    case teclas.RIGHT:
      cerdoX = cerdoX + distancia;
      contexto.drawImage(cerdo.imagen, cerdoX, cerdoY);
    break;
    case teclas.DOWN:
      cerdoY = cerdoY + distancia;
      contexto.drawImage(cerdo.imagen, cerdoX, cerdoY);
    break;
  }
}
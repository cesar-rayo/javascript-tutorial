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

var cerdoX = customRandom(0, 7) * 60;
var cerdoY = customRandom(0, 7) * 60;
document.addEventListener("keydown", moverCerdo);

var mapa = {
  url: "./imagenes/tile.png",
  loaded: false
}

var vaca = {
  url: "./imagenes/vaca.png",
  loaded: false,
  ejeX: 0,
  ejeY: 0
}

var cerdo = {
  url: "./imagenes/cerdo.png",
  loaded: false,
  ejeX: 0,
  ejeY: 0
}

var pollo = {
  url: "./imagenes/pollo.png",
  loaded: false,
  ejeX: 0,
  ejeY: 0
}

mapa.imagen = loadImage(mapa.url);
mapa.imagen.addEventListener("load", cargarMapa);

vaca.imagen = loadImage(vaca.url);
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = loadImage(pollo.url);
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = loadImage(cerdo.url);
cerdo.imagen.addEventListener("load", cargarCerdos);

var cantVacas = customRandom(1,5);
var cantPollos = customRandom(1,10);

var vacasCoordenadas = crearCoordenadas(cantVacas);
var pollosCoordenadas = crearCoordenadas(cantPollos);


function crearCoordenadas(cantidad){
  var lista = [];
  for(var i = 0; i < cantidad; i++){
    var x0 = customRandom(0, 7) * 60;
    var y0 = customRandom(0, 7) * 60;
    var coordenada = {
      ejeX: x0,
      ejeY: y0
    }
    lista.push(coordenada);
  }
  return lista;
}

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

function dibujarMapa(){
  if(mapa.loaded){
    contexto.drawImage(mapa.imagen, 0, 0);
  }
  if(vaca.loaded){
    // Dibujar vacas
    for(var i=0; i < cantVacas; i++){
      contexto.drawImage(vaca.imagen,vacasCoordenadas[i].ejeX, vacasCoordenadas[i].ejeY);
    }
  }
  if(pollo.loaded){
    // Dibujar pollos
    for(var i=0; i < cantPollos; i++){
      contexto.drawImage(pollo.imagen,pollosCoordenadas[i].ejeX, pollosCoordenadas[i].ejeY);
    }
  }
  if(cerdo.loaded){
    contexto.drawImage(cerdo.imagen, cerdoX, cerdoY);
  }
}

function moverCerdo(evento){
  var distancia = 30;
  switch(evento.keyCode){
    case teclas.LEFT:
      cerdoX = cerdoX - distancia;
      dibujarMapa();
    break;
    case teclas.UP:
      cerdoY = cerdoY - distancia;
      dibujarMapa();
    break;
    case teclas.RIGHT:
      cerdoX = cerdoX + distancia;
      dibujarMapa();
    break;
    case teclas.DOWN:
      cerdoY = cerdoY + distancia;
      dibujarMapa();
    break;
  }
}
var grafico = document.getElementById("grafico");
var lienzo = grafico.getContext("2d");

console.log(lienzo);

function dibujarLinea(color, x1, y1, x2, y2){
  lienzo.strokeStyle = color;
  lienzo.beginPath();
  //lienzo.moveTo(X,Y);
  lienzo.moveTo(x1,y1);
  lienzo.lineTo(x2,y2);
  lienzo.stroke();
  lienzo.closePath(); 
}

function dibujarTapete(color, lineas){
  var x2, y1;
  for(l=0; l < lineas; l++){
    y1 = 10 * l;
    x2 = 10 * (l + 1)
    dibujarLinea(color, 0, y1, x2, 300);
    console.log("Linea #" + l);
  }  
}

function dibujarTapete2(color, lineas){
/*
  x0,y0 - x1,y1 l
  300,300 - 290,0 0
  300,290 - 280,0 1
  300,280 - 270,0 2
*/
  var y0, x1;
  for(l=0; l < lineas; l++){
    y0 = 300 - (10 * l);
    x1 = 300 - ((l+1) * 10);
    dibujarLinea(color, 300, y0, x1, 0);
  }  
}

dibujarTapete("blue", 30)
dibujarLinea("red",1,1,1,299);
dibujarLinea("red",1,299,299,299);

dibujarTapete2("red", 30)
dibujarLinea("blue",1,1,299,1);
dibujarLinea("blue",299,1,299,299);








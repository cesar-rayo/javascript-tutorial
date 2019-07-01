var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;

var planeta = parseInt(prompt("Planeta?\n\n [1]Marte\n [2]Jupiter"))
var peso = prompt("Digite su peso");

var peso_final;
var planeta_nombre;

if (planeta == 1){
  planeta_nombre = "Marte"
  //parseInt() parseFloat()
  peso_final = (parseFloat(peso) * g_marte)/ g_tierra;
}
else if(planeta == 2){
  planeta_nombre = "Jupiter";
  //parseInt() parseFloat()
  peso_final = (parseFloat(peso) * g_jupiter)/ g_tierra;
}
else{
  planeta_nombre = "[No Registrado]"
  peso_final = 0;
}

peso_final = peso_final;

var msg = "El peso en <strong>" + planeta_nombre + "</strong> es: <strong>" + peso_final + "</strong> Kilos";
document.write(msg);
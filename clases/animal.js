//Diccionario en JS
var imagenes = [];
imagenes["Vaca"] = "./imagenes/vaca.png";
imagenes["Cerdo"] = "./imagenes/cerdo.png";
imagenes["Pollo"] = "./imagenes/pollo.png";

/* Mostrar keys en diccionario
for(var index in imagenes){
  console.log(index);
}
*/

/* Objeto Json
var imagenesJson = {
  "Vaca": "./imagenes/vaca.png",
  "Cerdo": "./imagenes/cerdo.png",
  "Pollo": "./imagenes/pollo.png"  
}
console.log(imagenesJson.Vaca);
console.log(imagenes.Vaca); >> LLamado igual a atributo en json
*/

class Animal{

  constructor(n, v, a){
    //Parametros
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen = new Image();
    this.imagen.src = imagenes[this.nombre];
  }

  //Metodo
  imprimirNombre(){
    console.log("Nombre del animal: " + this.nombre);
  }

  dibujar(){
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong><br/>");
    document.write("Vida: " + this.vida + "<br/>");
    document.write("Ataque: " + this.ataque + "<br/>");
    document.write("</p>" + "<hr/>");
  }

}
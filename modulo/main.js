var numeros = parseInt(prompt("Cantidad de Numeros"));

for(var i=1; i <= numeros; i++){
  divisible = false;
  if(esDivisible(i ,3)){
    divisible = true;
    document.write("Fizz ");
  }
  if(esDivisible(i ,5)){
    divisible = true;
    document.write("Buzz");
  }
  if(!esDivisible(i ,3) && !esDivisible(i ,5)){
    document.write(i);
  }
  document.write("<br/>");
}

function esDivisible(num, div){
  var respuesta = false;
  if(num % div == 0){
    respuesta = true;
  }
  return respuesta;
}
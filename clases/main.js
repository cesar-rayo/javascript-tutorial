var animales = []

animales.push(new Animal("Vaca", 100, 40));
animales.push(new Animal("Cerdo", 200, 20));
animales.push(new Animal("Pollo", 80, 50));

/* Mostrar el indice de cada objeto en la lista
for(var index in animales){
  animales[index].dibujar();
}
*/

// Mostrar cada objeto en la lista
for(var animal of animales){
  animal.dibujar();
}
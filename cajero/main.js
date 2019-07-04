var billetes = [];

billetes.push(new Billete(100, 1));
billetes.push(new Billete(50, 4));
billetes.push(new Billete(20, 3));
billetes.push(new Billete(10, 2));
billetes.push(new Billete(5, 2));

var cajero = new Cajero(billetes);

var btnButton = document.getElementById("btnRetirar");
var inputRetiro = document.getElementById("txtRetiro");
var txtEstado = document.getElementById("txtEstado");
var txtRecibo = document.getElementById("txtRecibo");

btnButton.addEventListener("click", empezarRetiro);
txtEstado.innerHTML = cajero.estado();

function empezarRetiro(){
  var cantidadRetiro = parseInt(inputRetiro.value);
  txtRecibo.innerHTML += cajero.retirar(cantidadRetiro);
  txtEstado.innerHTML = cajero.estado();
}
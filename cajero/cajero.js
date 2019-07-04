class Cajero{
  constructor(billetes){
    this.id = "COL_" + customRandom(200, 900);
    this.billetes = billetes;
  }

  retirar(vRetiro){
    var billetesRetirados = [];
    var nuevoSaldo = [];
    var valorRetiro = vRetiro;

    var current_datetime = new Date();
    var formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + 
      " / " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
    
    var recibo = "<hr/><strong>Detalle de la Operación</strong></br>";
    recibo += "Fecha: " + formatted_date + "<br/>";
    for(var b of this.billetes){
      var nCantidad = b.cantidad;
      if(valorRetiro > 0){
        var cantBilletes = Math.floor(valorRetiro / b.valor);
        if(cantBilletes > b.cantidad){
          cantBilletes = b.cantidad;
        }
        //Actualiza cantidad de billetes
        nCantidad = b.cantidad - cantBilletes;

        billetesRetirados.push(new Billete(b.valor, cantBilletes));
        valorRetiro = valorRetiro - (cantBilletes * b.valor);
      }
      //Actualiza dinero en cajero
      nuevoSaldo.push(new Billete(b.valor, nCantidad));
    }
    if(valorRetiro == 0){
      this.billetes = nuevoSaldo;
      for(var b of billetesRetirados){
        if(b.cantidad > 0){
          recibo += "Billete: $"+ b.valor + " Cantidad:" + b.cantidad + "<br/>";
        }
      }
    }
    else if(valorRetiro > 0){
      recibo += "No es posible la operacion";
      billetesRetirados = [];
    }
    recibo += "<hr/>";
    return recibo;
  }

  estado(){
    var reporte = "<hr/>" +
      "<p><strong>Cajero: " + this.id + "</strong><br/>";

    //Mostrar billetes
    if(this.billetes.length > 0){
      for( var b of this.billetes){
        reporte = reporte +
          "Billete: $"+ b.valor + " Cantidad:" + b.cantidad + "<br/>";
      }
    }
    else{
      reporte = reporte +"Cajero nuevo";
    }
    reporte = reporte + "</p><hr/>";
    return reporte;
  }
}

function customRandom(min, max){
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
//Variables
const dolarCompra = 390;
const dolarVenta = 394;
const euroCompra = 419;
const euroVenta = 424;
let resultado;
let divisa;
let operacion;
let valor;

//Alert
const resp = (param) => {
  alert(param + resultado.toFixed(3));
};

//validador
const val = () => {
  divisa = prompt("¿Que divisa desea cotizar (Dolares o euros)?").toLowerCase();

  if (divisa != "dolar" && divisa != "euro") {
    alert("Solo se podra cotizar dolares o euros");
    return;
  }

  operacion = prompt("¿Que operacion desea hacer?").toLowerCase();

  if (operacion != "comprar" && operacion != "vender") {
    alert("Solo se podra cotizar compras o ventas de divisas");
    return;
  }
};

//Funcion general
const convertidor = (operador) => {
  let respuesta = true | operador;

  while (respuesta) {
    val();

    if (divisa == "dolar" && operacion == "vender") {
      valor = parseInt(
        prompt("Introduzca el monto de dolares que desae vender")
      );
      resultado = valor * dolarCompra;
      resp("Recibirá $");
    } else if (divisa == "dolar" && operacion == "comprar") {
      valor = parseInt(
        prompt("Introduzca el monto de dolares que desae comprar")
      );
      resultado = valor * dolarVenta;
      resp("Deberá pagar $");
    } else if (divisa == "euro" && operacion == "vender") {
      valor = parseInt(
        prompt("Introduzca el monto de euros que desae vender")
      );
      resultado = valor * euroCompra;
      resp("Recibirá $");
    } else if (divisa == "euro" && operacion == "comprar") {
      valor = parseInt(
        prompt("Introduzca el monto de euros que desae comprar")
      );
      resultado = valor * euroVenta;
      resp("Deberá pagar $");
    }
    respuesta = confirm("¿Desea hacer otro calculo?");
  }
};

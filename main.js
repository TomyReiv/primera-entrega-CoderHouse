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

  if (operacion != "compra" && operacion != "venta") {
    alert("Solo se podra cotizar compras o ventas de divisas");
    return;
  }
};

//Funcion general
const convertidor = (operador) => {
  let respuesta = true | operador;

  while (respuesta) {
    val();

    if (divisa == "dolar" && operacion == "compra") {
      valor = parseInt(
        prompt("Introduzca el monto de dolares que desae cambiar")
      );
      resultado = valor * dolarCompra;
      resp("$");
    } else if (divisa == "dolar" && operacion == "venta") {
      valor = parseInt(
        prompt("Introduzca el monto de pesos que desae cambiar")
      );
      resultado = valor / dolarVenta;
      resp("$USA");
    } else if (divisa == "euro" && operacion == "compra") {
      valor = parseInt(
        prompt("Introduzca el monto de euros que desae cambiar")
      );
      resultado = valor * euroCompra;
      resp("$");
    } else if (divisa == "euro" && operacion == "venta") {
      valor = parseInt(
        prompt("Introduzca el monto de pesos que desae cambiar")
      );
      resultado = valor / euroVenta;
      resp("€");
    }
    respuesta = confirm("¿Desea hacer otro calculo?");
  }
};

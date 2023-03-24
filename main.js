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
  divisa = prompt("¿Que divisa desea cotizar (Dolares o euros)?").toLowerCase().trim();

  if (divisa != "dolar" && divisa != "euro") {
    alert("Solo se podra cotizar dolares o euros");
    return;
  }

  operacion = prompt("¿Que operacion desea hacer?").toLowerCase().trim();

  if (operacion != "comprar" && operacion != "vender") {
    alert("Solo se podra cotizar compras o ventas de divisas");
    return;
  }
};

//funcion de ingreso de datos

const ingresarValor = (param) => {
  valor = parseInt(prompt(param));
};

//validar que sea un numero
const valNumero = (param) => {
  if (isNaN(param)) {
    alert("El valor agregado no puede ser procesado");
    return;
  }
};

//Funcion general
const convertidor = (operador) => {
  let respuesta = true | operador;

  while (respuesta) {
    val();

    if (divisa == "dolar" && operacion == "vender") {
      ingresarValor("Introduzca el monto de dolares que desae vender");
      if (!valNumero(valor)) {
        resultado = valor * dolarCompra;
        resp("Recibirá $");
      }
    } else if (divisa == "dolar" && operacion == "comprar") {
      ingresarValor("Introduzca el monto de dolares que desae comprar");
      if (!valNumero(valor)) {
        resultado = valor * dolarVenta;
        resp("Deberá pagar $");
      }
    } else if (divisa == "euro" && operacion == "vender") {
      ingresarValor("Introduzca el monto de euros que desae vender");
      if (!valNumero(valor)) {
        resultado = valor * euroCompra;
        resp("Recibirá $");
      }
    } else if (divisa == "euro" && operacion == "comprar") {
      ingresarValor("Introduzca el monto de euros que desae comprar");
      if (!valNumero(valor)) {
        resultado = valor * euroVenta;
        resp("Deberá pagar $");
      }
    }
    respuesta = confirm("¿Desea hacer otro calculo?");
  }
};

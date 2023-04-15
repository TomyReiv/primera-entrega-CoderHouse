//Variables

let resultado;
let divisa;
let operacion;
let valor;
const cotizador = document.querySelector('#Cotizador');

const operaciones = ['comprar', 'vender'];

const dolar = {
  compra: 390,
  venta: 394
}

const euro = {
  compra: 419,
  venta: 424
}

//Alert
const resp = (param) => {
  alert(param + resultado.toFixed(3));
};

//validador
const validar = () => {
  divisa = prompt("¿Que divisa desea cotizar (Dolar o euro)?").toLowerCase().trim();

  if (divisa != "dolar" && divisa != "euro") {
    alert("Solo se podra cotizar dolares o euros");
    return;
  }

  operacion = prompt("¿Desea comprar o vender?").toLowerCase().trim();

  if (!operaciones.includes(operacion)) {
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
    validar();

    if (divisa == "dolar" && operacion == "vender") {
      ingresarValor("Introduzca el monto de dolares que desea vender");
      if (!valNumero(valor)) {
        resultado = valor * dolar.compra;
        resp("Recibirá $");
      }
    } else if (divisa == "dolar" && operacion == "comprar") {
      ingresarValor("Introduzca el monto de dolares que desea comprar");
      if (!valNumero(valor)) {
        resultado = valor * dolar.venta;
        resp("Deberá pagar $");
      }
    } else if (divisa == "euro" && operacion == "vender") {
      ingresarValor("Introduzca el monto de euros que desea vender");
      if (!valNumero(valor)) {
        resultado = valor * euro.compra;
        resp("Recibirá $");
      }
    } else if (divisa == "euro" && operacion == "comprar") {
      ingresarValor("Introduzca el monto de euros que desea comprar");
      if (!valNumero(valor)) {
        resultado = valor * euro.venta;
        resp("Deberá pagar $");
      }
    }
    respuesta = confirm("¿Desea hacer otro calculo?");
  }
};

//Evento click
cotizador.addEventListener('click', () =>{
  convertidor(true);
})
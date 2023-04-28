//Variables
let importe = document.querySelector("#importe");

const cotizador = document.querySelector("#Cotizador");
const error = document.querySelector("#error");
const errorTotal = document.querySelector("#errorTotal");
const darkModeButton = document.querySelector("#darkMode");
let darkMode = false;
const body = document.querySelector("body");
const form = document.querySelector("#form");
const respMensaje = document.querySelector("#resultado");
let resultado;
const storHistorial = JSON.parse(localStorage.getItem("Historial"));
const historial = {
  importe: storHistorial?.importe || 0,
  desde: storHistorial?.desde || "",
  hasta: storHistorial?.hasta || "",
};
importe.value = historial.importe;

const Monedas = {
  peso: {
    dolar: 0.00453,
    euro: 0.00412,
    real: 0.02289,
    libra: 0.00364,
  },
  dolar: {
    peso: 220.509,
    euro: 0.90795,
    real: 5.04665,
    libra: 0.80357,
  },
  real: {
    peso: 43.6637,
    euro: 0.17979,
    dolar: 19801,
    libra: 15912,
  },
  libra: {
    peso: 274.37,
    euro: 1.12978,
    real: 6.27932,
    dolar: 1.24425,
  },
  euro: {
    peso: 242.829,
    libra: 0.88496,
    real: 5.55747,
    dolar: 1.10122,
  },
};

//Respuesta
const resp = (param, parm2) => {
  if (parm2 > 0) {
    respMensaje.textContent = `${param}: ${parm2}`;
  }
};

//validador
const validar = (importe, desde, hasta) => {
  if (!importe || !desde || !hasta || importe <= 0) {
    errorTotal.textContent = "*Todos los campos son obligatorios";
    setTimeout(() => {
      errorTotal.textContent = "";
    }, "4000");
    return;
  }
};

//validar que sea un numero
const valNumero = (param) => {
  if (isNaN(param)) {
    error.textContent = "*Solo se podran procesar numeros";
    setTimeout(() => {
      error.textContent = "";
    }, "4000");
    return;
  }
};

//Funcion general
//Evento click
cotizador.addEventListener("click", (e) => {
  e.preventDefault();

  let importe = document.querySelector("#importe").value;
  let desde = document.querySelector("#de").value;
  let hasta = document.querySelector("#a").value;

  validar(importe, desde, hasta);
  valNumero(importe);


  const conversionRates = {
    GBP: {
      ARS: Monedas.libra.peso,
      EUR: Monedas.libra.euro,
      USD: Monedas.libra.dolar,
      BRL: Monedas.libra.real
    },
    ARS: {
      GBP: Monedas.peso.libra,
      EUR: Monedas.peso.euro,
      USD: Monedas.peso.dolar,
      BRL: Monedas.peso.real
    },
    USD: {
      ARS: Monedas.dolar.peso,
      EUR: Monedas.dolar.euro,
      GBP: Monedas.dolar.libra,
      BRL: Monedas.dolar.real
    },
    EUR: {
      ARS: Monedas.euro.peso,
      GBP: Monedas.euro.libra,
      USD: Monedas.euro.dolar,
      BRL: Monedas.euro.real
    },
    BRL: {
      ARS: Monedas.real.peso,
      EUR: Monedas.real.euro,
      USD: Monedas.real.dolar,
      GBP: Monedas.real.libra
    }
  };
  
  if (desde === "GBP" && conversionRates.GBP.hasOwnProperty(hasta)) {
    resultado = importe * conversionRates.GBP[hasta];
  }
  if (desde === "USD" && conversionRates.USD.hasOwnProperty(hasta)) {
    resultado = importe * conversionRates.USD[hasta];
  }
  if (desde === "ARS" && conversionRates.ARS.hasOwnProperty(hasta)) {
    resultado = importe * conversionRates.ARS[hasta];
  }
  if (desde === "EUR" && conversionRates.EUR.hasOwnProperty(hasta)) {
    resultado = importe * conversionRates.EUR[hasta];
  }
  if (desde === "BRL" && conversionRates.BRL.hasOwnProperty(hasta)) {
    resultado = importe * conversionRates.BRL[hasta];
  }


  if (desde === hasta) {
    resultado = importe;
  }

  let resRedondeado = (Math.floor(resultado * 100) / 100).toFixed(2);

  historial.importe = importe;
  historial.desde = desde;
  historial.hasta = hasta;

  const storage = localStorage.setItem("Historial", JSON.stringify(historial));

  resp(hasta, resRedondeado);
});

//darkMode

darkModeButton.addEventListener("click", () => {
  !darkMode
    ? body.classList.add("darkMode")
    : body.classList.remove("darkMode");
  !darkMode
    ? form.classList.add("darkMode")
    : form.classList.remove("darkMode");
  darkMode = !darkMode;
});

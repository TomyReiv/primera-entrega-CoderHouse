

//Variables
let importe = document.querySelector("#importe");
let darkMode = false;
let resultado;

const cotizador = document.querySelector("#Cotizador");
const error = document.querySelector("#error");
const errorTotal = document.querySelector("#errorTotal");
const darkModeButton = document.querySelector("#darkMode");
const body = document.querySelector("body");
const form = document.querySelector("#form");
const respMensaje = document.querySelector("#resultado");
const storHistorial = JSON.parse(localStorage.getItem("Historial"));
const historial = {
  importe: storHistorial?.importe || 0,
  base: storHistorial?.base || "",
  currencies: storHistorial?.currencies || "",
};
importe.value = historial.importe;

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
//Api Divisas

cotizador.addEventListener("click", (e) => {
  e.preventDefault();

  let valueData;
  let resRedondeado;
  const currencies = document.querySelector("#a").value;
  const base = document.querySelector("#de").value;
  const importe = document.querySelector("#importe").value;

  validar(importe, base, currencies);
  valNumero(importe);

  if (base === currencies) {
    resultado = importe;
  }

  if (base === "ARS" || currencies === "ARS") {
    swal({
      title: "Cuidado",
      text: "Los valores son sin los impuestos, consulte los impuestos oficiales a la hora de hacer la conversion",
      icon: "warning",
      button: "Cancelar",
    });
  }

  const API_KEY = "noUgT4wQTa8SIblN5fezTBC8PTd5eoulnhdNsTTf";
  const url = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&currencies=${currencies}&base_currency=${base}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (var key in data.data) {
        valueData = data.data[key].value;
      }
      resultado = importe * valueData;
      resRedondeado = (Math.floor(resultado * 100) / 100).toFixed(2);
      resp(currencies, resRedondeado);
    })
    .catch((error) => {
      swal({
        title: error,
        text: "Intente nuevamente",
        icon: "danger",
        button: "Cancelar",
      });
    });

  historial.importe = importe;
  historial.base = base;
  historial.currencies = currencies;
  const storage = localStorage.setItem("Historial", JSON.stringify(historial));
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


const tosty = (frase, destination, avatar, duration) => {
  setTimeout( () => {
    Toastify({
    text: frase,
    duration: 8000,
    destination: destination,
    newWindow: true,
    close: true,
    gravity: "bottom", 
    position: "left", 
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    avatar: avatar,
    onClick: function(){}
  }).showToast();
  }, duration);
}

tosty("Mi github", "https://github.com/TomyReiv", 'github.svg', 5000);
tosty("Mi Linkedin" ,"https://www.linkedin.com/in/tomas-rave-38794025a/", 'linkedin.svg', 7000);
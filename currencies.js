const currenciesList = async () => {
  try {
    const resp = await fetch("generated.json");
    const json = await resp.json();
    const desde = document.querySelector("#de");
    const hasta = document.querySelector("#a");

    for (const [key, value] of Object.entries(json)) {
      let optionElement = document.createElement("option");
      optionElement.value = key;
      optionElement.text = value;
      hasta.appendChild(optionElement);
    }
    for (const [key, value] of Object.entries(json)) {
      let optionElement = document.createElement("option");
      optionElement.value = key;
      optionElement.text = value;
      desde.appendChild(optionElement);
    }

    for (let i = 0; i < desde.options.length; i++) {
      let option = desde.options[i];

      if (option.value === historial.base) {
        option.selected = true;
        break;
      }
    }

    for (let i = 0; i < hasta.options.length; i++) {
      let option = hasta.options[i];

      if (option.value === historial.currencies) {
        option.selected = true;
        break;
      }
    }
  } catch (error) {
    console.error("Error en la función currenciesList:", error);
  }
};


currenciesList();

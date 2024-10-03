//------------ variables ------------
//***** botones *****
const settings = document.getElementById("settings");

//***** elementos *****
const modal = document.getElementById("myModal");
const date = document.getElementById("dateMtt");
const name = document.getElementById("nameMtt");
const stack = document.getElementById("stackMtt");
const buyIn = document.getElementById("buyInMtt");
const acept = document.getElementById("acept");
const cancel = document.getElementById("cancel");

//***** tiempos *****
// fecha actual
const today = new Date();

// fecha en formato DD-MM-YYYY
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = today.getFullYear();

//------------ funciones ------------

//------------ ejecucion ------------

// abrir modal settings
settings.addEventListener("click", () => {
  modal.style.display = "block";
});

// fecha
date.value = `${day}/${month}/${year}`;

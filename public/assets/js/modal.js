//------------ variables ------------
//***** botones *****
const settings = document.getElementById("settings");
const closeM = document.getElementById("close");

//***** elementos *****
const modal = document.getElementById("myModal");
const date = document.getElementById("dateModal");
const name = document.getElementById("nameModal");
const stack = document.getElementById("stackModal");
const buyIn = document.getElementById("buyInModal");
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
  modal.style.display = "flex";
});

// cerrar modal settings
closeM.addEventListener("click", () => {
  modal.style.display = "none";
});

// fecha
date.value = `${day}/${month}/${year}`;

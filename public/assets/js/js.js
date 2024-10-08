//------------ variables Main------------
//***** botones *****
// level
const downLevel = document.getElementById("lev-");
const upLevel = document.getElementById("lev+");

// time
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const save = document.getElementById("save");

// panel
const downEntries = document.getElementById("e-");
const upEntries = document.getElementById("e+");
const downRebuys = document.getElementById("r-");
const upRebuys = document.getElementById("r+");
const downLeft = document.getElementById("l-");
const upLeft = document.getElementById("l+");
const downAddons = document.getElementById("a-");
const upAddons = document.getElementById("a+");

//***** elementos *****
// title
const title = document.getElementById("title");
// primera columna
let currentTime = document.getElementById("sCT");
let elapsedTime = document.getElementById("sET");
let nextBreak = document.getElementById("sNBr");
let avg = document.getElementById("sAvg");

// segunda columna
let level = document.getElementById("level");
let time = document.getElementById("time");
let blinds = document.getElementById("blinds");
let ante = document.getElementById("sA2");
let nextBlinds = document.getElementById("sNBl1");
let nextAnte = document.getElementById("sNBl3");

// tercera columna
let entries = document.getElementById("sB");
let rebuys = document.getElementById("sR");
let addons = document.getElementById("sAd");
let left = document.getElementById("sL");

// info
const stack = document.getElementById("iM1");
const buyIn = document.getElementById("iM2");
const endRebuys = document.getElementById("iM3");

//------------ variables Modal------------
//***** botones *****
const settings = document.getElementById("settings");
const closeM = document.getElementById("close");

//***** elementos *****
const modal = document.getElementById("myModal");
const dateM = document.getElementById("dateModal");
const nameM = document.getElementById("nameModal");
const stackM = document.getElementById("stackModal");
const buyInM = document.getElementById("buyInModal");
const endRebuysM = document.getElementById("endRebuysModal");
const formInfoM = document.getElementById("infoFormModal");
const sendInfoBtnM = document.getElementById("infoFormSend");
const resetInfoBtnM = document.getElementById("cancel");

const theme = document.getElementById("themeColor");

//------------ funciones ------------
//***** tiempos *****
// fecha actual
const today = new Date();

// fecha en formato DD-MM-YYYY
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = today.getFullYear();

// hora actual formateada
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
}

// actualizar la hora
function updateCurrentTime() {
  currentTime.textContent = updateTime();
}
//------------ ejecucion ------------

// abrir modal settings
settings.addEventListener("click", () => {
  modal.style.display = "flex";
});

// cerrar modal settings
closeM.addEventListener("click", () => {
  modal.style.display = "none";
});

// mostrar hora
updateCurrentTime();
setInterval(updateCurrentTime, 1000);

// FORM información del torneo
dateM.value = `${day}/${month}/${year}`;
formInfoM.addEventListener("submit", () => {
  event.preventDefault();
  title.textContent = nameM.value;
  stack.textContent = stackM.value;
  buyIn.textContent = buyInM.value;
  endRebuys.textContent = " Nivel " + endRebuysM.value;
});

// FORM color tema
theme.addEventListener("change", () => {
  $colorTheme = theme.value;
  switch (colorTheme) {
    case "blue":
      break;
    case "red":
      break;
    case "green":
      break;

    default:
      break;
  }
});

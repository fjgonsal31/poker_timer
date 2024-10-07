//------------ variables ------------
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
const rebuyLevel = document.getElementById("iM3");

//------------ funciones ------------
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

updateCurrentTime();
setInterval(updateCurrentTime, 1000);
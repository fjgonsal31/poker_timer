//------------ variables Main------------
//***** botones *****
// level
const downLevel = document.getElementById("lev-");
const upLevel = document.getElementById("lev+");

// time
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const endBtn = document.getElementById("end");

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
// general
const classOne = document.querySelectorAll(".one");
const classTwo = document.querySelectorAll(".two");
const classThree = document.querySelectorAll(".three");

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
const sendInfoBtnM = document.getElementById("infoDivSend");
const resetInfoBtnM = document.getElementById("infoDivReset");
const generatePrizes = document.getElementById("prizesGenerateBtn");
const sendPrizesBtn = document.getElementById("prizesSendBtn");
const closeM = document.getElementById("close");

//***** elementos *****
const modal = document.getElementById("myModal");
const dateM = document.getElementById("dateModal");
const nameM = document.getElementById("nameModal");
const stackM = document.getElementById("stackModal");
const buyInM = document.getElementById("buyInModal");
const endRebuysM = document.getElementById("endRebuysModal");
const totalPrize = document.getElementById("totalPrize");
const paidPlaces = document.getElementById("paidPlaces");
const tablePrizes = document.getElementById("tablePrizes");
const tbodyPrizes = document.getElementById("tbodyPrizes");
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
infoDivSend.addEventListener("click", () => {
  title.textContent = nameM.value;
  stack.textContent = parseInt(stackM.value).toLocaleString();
  buyIn.textContent = parseInt(buyInM.value).toLocaleString();
  endRebuys.textContent = " Nivel " + parseInt(endRebuysM.value);
});

resetInfoBtnM.addEventListener("click", () => {
  title.textContent = "-";
  stack.textContent = "-";
  buyIn.textContent = "-";
  endRebuys.textContent = " Nivel " + "-";
  nameM.value = "";
  stackM.value = "";
  buyInM.value = "";
  endRebuysM.value = "";
});

// FORM color tema
theme.addEventListener("change", () => {
  let selectedColor = theme.value;
  let themeElements = [classOne, classTwo, classThree];
  let color1 = "var(--blue1)";
  let color2 = "var(--blue2)";
  let color3 = "var(--blue3)";
  let color4 = "var(--blue4)";

  if (selectedColor == "red") {
    color1 = "var(--red1)";
    color2 = "var(--red2)";
    color3 = "var(--red3)";
    color4 = "var(--red4)";
  } else if (selectedColor == "green") {
    color1 = "var(--green1)";
    color2 = "var(--green2)";
    color3 = "var(--green3)";
    color4 = "var(--green4)";
  }

  themeElements[0].forEach((element) => {
    element.style.backgroundColor = color1;
  });

  themeElements[1].forEach((element) => {
    element.style.backgroundColor = color2;
  });

  themeElements[2].forEach((element) => {
    element.style.backgroundColor = color3;
  });

  document.documentElement.style.backgroundColor = color4;
});

// FORM premios
generatePrizes.addEventListener("click", () => {
  let distribucion = [];
  tbodyPrizes.textContent = "";

  // hacer tabla en BD
  switch (Number(paidPlaces.value)) {
    case 3:
      distribucion = [
        { place: "1°", percent: 50 },
        { place: "2°", percent: 30 },
        { place: "3°", percent: 20 },
      ];
      break;
    case 4:
      distribucion = [
        { place: "1°", percent: 50 },
        { place: "2°", percent: 25 },
        { place: "3°", percent: 15 },
        { place: "4°", percent: 10 },
      ];
      break;
    case 5:
      distribucion = [
        { place: "1°", percent: 40 },
        { place: "2°", percent: 25 },
        { place: "3°", percent: 15 },
        { place: "4°", percent: 10 },
        { place: "5°", percent: 10 },
      ];
      break;
    default:
      distribucion = "Número de jugadores no válido. Debe estar entre 3 y 5.";
      break;
  }

  if (typeof distribucion !== "string") {
    tablePrizes.style.display = "block";

    for (let i = 0; i < distribucion.length; i++) {
      let tr = document.createElement("tr");
      let tdPlace = document.createElement("td");

      tdPlace.textContent = distribucion[i].place;
      tr.appendChild(tdPlace);

      let tdPercent = document.createElement("td");

      tdPercent.textContent = distribucion[i].percent + " %";
      tr.appendChild(tdPercent);

      let tdPrize = document.createElement("td");

      tdPrize.textContent =
        Number(totalPrize.value) * (Number(distribucion[i].percent) / 100) +
        " €";
      tr.appendChild(tdPrize);

      tbodyPrizes.appendChild(tr);
    }
  } else {
    tablePrizes.style.display = "none";
  }
});

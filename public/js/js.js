//------------ variables Main------------
//***** botones *****
// level
const downLevel = document.getElementById("lev-");
const upLevel = document.getElementById("lev+");

// action
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const endBtn = document.getElementById("end");

// control panel
const downEntry = document.getElementById("e-");
const upEntry = document.getElementById("e+");
const downRebuy = document.getElementById("r-");
const upRebuy = document.getElementById("r+");
const downPlayer = document.getElementById("l-");
const upPlayer = document.getElementById("l+");
const downAddon = document.getElementById("a-");
const upAddon = document.getElementById("a+");

//***** elementos *****
// general
const classOne = document.querySelectorAll(".one");
const classTwo = document.querySelectorAll(".two");
const classThree = document.querySelectorAll(".three");

// first row
const title = document.getElementById("title");

// col1
let currentTime = document.getElementById("sCT");
let elapsedTime = document.getElementById("sET");
let nextBreak = document.getElementById("sNBr");
let avg = document.getElementById("sAvg");

// col2
let level = document.getElementById("level");
let time = document.getElementById("time");
let blinds = document.getElementById("blinds");
let ante = document.getElementById("sA2");
let nextBlinds = document.getElementById("sNBl1");
let nextAnte = document.getElementById("sNBl3");

// col3
let entries = document.getElementById("sB").textContent;
let rebuys = document.getElementById("sR").textContent;
let addons = document.getElementById("sAd").textContent;
let players = document.getElementById("sP").textContent;
let playersLeft = players.split("/")[0];

// last row
const pInfoMtt = document.getElementById("infoMtt");
const stack = document.getElementById("iM1");
const buyIn = document.getElementById("iM2");
const endRebuys = document.getElementById("iM3");
const pPrizes = document.getElementById("prizes");

//------------ variables Modal------------
//***** botones *****
const settingsBtn = document.getElementById("settingsBtn");
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
settingsBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// cerrar modal settings
closeM.addEventListener("click", () => {
  modal.style.display = "none";
});

// mostrar hora
updateCurrentTime();
setInterval(updateCurrentTime, 1000);

// información del torneo
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

// generate premios
let arrayPrizes = [];
generatePrizes.addEventListener("click", () => {
  let distribucion = [];
  if (Number(paidPlaces.value) > 0) {
    sendPrizesBtn.style.display = "block";
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

        arrayPrizes[distribucion[i].place] =
          Number(totalPrize.value) * (Number(distribucion[i].percent) / 100);
      }
    } else {
      tablePrizes.style.display = "none";
    }
  }
});

// enviar premios
sendPrizesBtn.addEventListener("click", () => {
  pPrizes.style.display = "flex";
  pInfoMtt.style.display = "none";
  console.log(arrayPrizes);
  // arrayPrizes.forEach((value, key) => {
  //   console.log(key + " | " + value);
  //   // pPrizes.textContent += key + " | " + value;
  // });
});

// color tema
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

  document.body.style.backgroundColor = color4;
});

// control panel btn
// entries
downEntry.addEventListener("click", () => {
  if (Number(entries) != 0) {
    entries = Number(entries) - 1;
    document.getElementById("sB").textContent = entries;
    document.getElementById("sP").textContent = playersLeft + "/" + entries;
    playersLeft = document.getElementById("sP").textContent.split("/")[0];
    playersLeft = Number(playersLeft) - 1;
    document.getElementById("sP").textContent = playersLeft + "/" + entries;
  }
});
upEntry.addEventListener("click", () => {
  entries = Number(entries) + 1;
  document.getElementById("sB").textContent = entries;
  document.getElementById("sP").textContent = playersLeft + "/" + entries;
});

// rebuys
downRebuy.addEventListener("click", () => {
  if (Number(rebuys) != 0) {
    rebuys = Number(rebuys) - 1;
    document.getElementById("sR").textContent = rebuys;
  }
});
upRebuy.addEventListener("click", () => {
  rebuys = Number(rebuys) + 1;
  document.getElementById("sR").textContent = rebuys;
});

// add ons
downAddon.addEventListener("click", () => {
  if (Number(addons) != 0) {
    addons = Number(addons) - 1;
    document.getElementById("sAd").textContent = addons;
  }
});
upAddon.addEventListener("click", () => {
  addons = Number(addons) + 1;
  document.getElementById("sAd").textContent = addons;
});

// players
downPlayer.addEventListener("click", () => {
  playersLeft = document.getElementById("sP").textContent.split("/")[0];

  if (Number(playersLeft) != 0) {
    playersLeft = Number(playersLeft) - 1;
    document.getElementById("sP").textContent = playersLeft + "/" + entries;
  }
});
upPlayer.addEventListener("click", () => {
  playersLeft = document.getElementById("sP").textContent.split("/")[0];

  if (Number(playersLeft) < Number(entries)) {
    playersLeft = Number(playersLeft) + 1;
    document.getElementById("sP").textContent = playersLeft + "/" + entries;
  }
});

//------------ variables Main------------
//***** botones *****
// settings
const settingsBtn = document.getElementById("settingsBtn");
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
const sendInfoBtnM = document.getElementById("infoDivSend");
const resetInfoBtnM = document.getElementById("infoDivReset");
const generatePrizesBtnM = document.getElementById("prizesGenerateBtn");
const sendPrizesBtnM = document.getElementById("prizesSendBtn");
const closeM = document.getElementById("close");

//***** elementos *****
const inputs = document.querySelectorAll(".inputInfo");
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
let totalRow = document.getElementById("totalRow");
const theme = document.getElementById("themeColor");
const selectLevels = document.getElementById("sectBlindsSelect");
const tableBlindsLevels = document.getElementById("tableBlindsLevels");
const tbodyLevels = document.getElementById("tbodyLevels");

const levels = {
  lento: {
    name: "Lento",
    levels: [
      {
        level: 1,
        sb: 100,
        bb: 100,
        ante: 0,
        time: 15,
      },
      {
        level: 2,
        sb: 100,
        bb: 200,
        ante: 0,
        time: 15,
      },
      {
        level: 3,
        sb: 200,
        bb: 300,
        ante: 0,
        time: 15,
      },
      {
        level: 4,
        sb: 200,
        bb: 400,
        ante: 0,
        time: 15,
      },
      {
        level: 5,
        sb: 200,
        bb: 500,
        ante: 0,
        time: 15,
      },
      {
        level: 6,
        sb: 300,
        bb: 600,
        ante: 0,
        time: 15,
      },
      {
        level: 7,
        sb: 400,
        bb: 800,
        ante: 0,
        time: 15,
      },
      {
        level: 8,
        sb: 500,
        bb: 1000,
        ante: 0,
        time: 15,
      },
      {
        level: 9,
        sb: 500,
        bb: 1000,
        ante: 1000,
        time: 15,
      },
      {
        level: 10,
        sb: 700,
        bb: 1500,
        ante: 1500,
        time: 15,
      },
      {
        level: 11,
        sb: 1000,
        bb: 2000,
        ante: 2000,
        time: 15,
      },
      {
        level: 12,
        sb: 1500,
        bb: 3000,
        ante: 3000,
        time: 15,
      },
      {
        level: 13,
        sb: 2000,
        bb: 4000,
        ante: 4000,
        time: 15,
      },
      {
        level: 14,
        sb: 2500,
        bb: 5000,
        ante: 5000,
        time: 15,
      },
      {
        level: 15,
        sb: 3000,
        bb: 6000,
        ante: 6000,
        time: 15,
      },
      {
        level: 16,
        sb: 4000,
        bb: 8000,
        ante: 8000,
        time: 15,
      },
      {
        level: 17,
        sb: 6000,
        bb: 12000,
        ante: 12000,
        time: 15,
      },
      {
        level: 18,
        sb: 8000,
        bb: 16000,
        ante: 16000,
        time: 15,
      },
      {
        level: 19,
        sb: 10000,
        bb: 20000,
        ante: 20000,
        time: 15,
      },
      {
        level: 20,
        sb: 15000,
        bb: 30000,
        ante: 30000,
        time: 15,
      },
      {
        level: 21,
        sb: 20000,
        bb: 40000,
        ante: 40000,
        time: 15,
      },
      {
        level: 22,
        sb: 25000,
        bb: 50000,
        ante: 50000,
        time: 15,
      },
      {
        level: 23,
        sb: 30000,
        bb: 60000,
        ante: 60000,
        time: 15,
      },
      {
        level: 24,
        sb: 40000,
        bb: 80000,
        ante: 80000,
        time: 15,
      },
      {
        level: 25,
        sb: 50000,
        bb: 100000,
        ante: 100000,
        time: 15,
      },
    ],
  },
  normal: {
    name: "Normal",
    levels: [
      {
        level: 1,
        sb: 100,
        bb: 200,
        ante: 0,
        time: 15,
      },
      {
        level: 2,
        sb: 200,
        bb: 400,
        ante: 0,
        time: 15,
      },
      {
        level: 3,
        sb: 300,
        bb: 600,
        ante: 0,
        time: 15,
      },
      {
        level: 4,
        sb: 400,
        bb: 800,
        ante: 0,
        time: 15,
      },
      {
        level: 5,
        sb: 500,
        bb: 1000,
        ante: 0,
        time: 15,
      },
      {
        level: 6,
        sb: 600,
        bb: 1200,
        ante: 0,
        time: 15,
      },
      {
        level: 7,
        sb: 700,
        bb: 1400,
        ante: 0,
        time: 15,
      },
      {
        level: 8,
        sb: 800,
        bb: 1600,
        ante: 0,
        time: 15,
      },
      {
        level: 9,
        sb: 1000,
        bb: 2000,
        ante: 2000,
        time: 15,
      },
      {
        level: 10,
        sb: 1200,
        bb: 2500,
        ante: 2500,
        time: 15,
      },
      {
        level: 11,
        sb: 1500,
        bb: 3000,
        ante: 3000,
        time: 15,
      },
      {
        level: 12,
        sb: 1700,
        bb: 3500,
        ante: 3500,
        time: 15,
      },
      {
        level: 13,
        sb: 2000,
        bb: 4000,
        ante: 4000,
        time: 15,
      },
      {
        level: 14,
        sb: 2500,
        bb: 5000,
        ante: 5000,
        time: 15,
      },
      {
        level: 15,
        sb: 3000,
        bb: 6000,
        ante: 6000,
        time: 15,
      },
      {
        level: 16,
        sb: 4000,
        bb: 8000,
        ante: 8000,
        time: 15,
      },
      {
        level: 17,
        sb: 6000,
        bb: 12000,
        ante: 12000,
        time: 15,
      },
      {
        level: 18,
        sb: 8000,
        bb: 16000,
        ante: 16000,
        time: 15,
      },
      {
        level: 19,
        sb: 10000,
        bb: 20000,
        ante: 20000,
        time: 15,
      },
      {
        level: 20,
        sb: 15000,
        bb: 30000,
        ante: 30000,
        time: 15,
      },
      {
        level: 21,
        sb: 20000,
        bb: 40000,
        ante: 40000,
        time: 15,
      },
      {
        level: 22,
        sb: 25000,
        bb: 50000,
        ante: 50000,
        time: 15,
      },
      {
        level: 23,
        sb: 30000,
        bb: 60000,
        ante: 60000,
        time: 15,
      },
      {
        level: 24,
        sb: 40000,
        bb: 80000,
        ante: 80000,
        time: 15,
      },
      {
        level: 25,
        sb: 50000,
        bb: 100000,
        ante: 100000,
        time: 15,
      },
    ],
  },
  rapido: {
    name: "Rápido",
    levels: [
      {
        level: 1,
        sb: 100,
        bb: 200,
        ante: 100,
        time: 15,
      },
      {
        level: 2,
        sb: 200,
        bb: 400,
        ante: 400,
        time: 15,
      },
      {
        level: 3,
        sb: 300,
        bb: 600,
        ante: 600,
        time: 15,
      },
      {
        level: 4,
        sb: 400,
        bb: 800,
        ante: 800,
        time: 15,
      },
      {
        level: 5,
        sb: 500,
        bb: 1000,
        ante: 1000,
        time: 15,
      },
      {
        level: 6,
        sb: 600,
        bb: 1200,
        ante: 1200,
        time: 15,
      },
      {
        level: 7,
        sb: 800,
        bb: 1600,
        ante: 1600,
        time: 15,
      },
      {
        level: 8,
        sb: 1000,
        bb: 2000,
        ante: 2000,
        time: 15,
      },
      {
        level: 9,
        sb: 1500,
        bb: 3000,
        ante: 3000,
        time: 15,
      },
      {
        level: 10,
        sb: 2000,
        bb: 4000,
        ante: 4000,
        time: 15,
      },
      {
        level: 11,
        sb: 2500,
        bb: 5000,
        ante: 5000,
        time: 15,
      },
      {
        level: 12,
        sb: 3000,
        bb: 6000,
        ante: 6000,
        time: 15,
      },
      {
        level: 13,
        sb: 4000,
        bb: 8000,
        ante: 8000,
        time: 15,
      },
      {
        level: 14,
        sb: 6000,
        bb: 12000,
        ante: 12000,
        time: 15,
      },
      {
        level: 15,
        sb: 8000,
        bb: 16000,
        ante: 16000,
        time: 15,
      },
      {
        level: 16,
        sb: 10000,
        bb: 20000,
        ante: 20000,
        time: 15,
      },
      {
        level: 17,
        sb: 15000,
        bb: 30000,
        ante: 30000,
        time: 15,
      },
      {
        level: 18,
        sb: 20000,
        bb: 40000,
        ante: 40000,
        time: 15,
      },
      {
        level: 19,
        sb: 25000,
        bb: 50000,
        ante: 50000,
        time: 15,
      },
      {
        level: 20,
        sb: 30000,
        bb: 60000,
        ante: 60000,
        time: 15,
      },
      {
        level: 21,
        sb: 40000,
        bb: 80000,
        ante: 80000,
        time: 15,
      },
      {
        level: 22,
        sb: 50000,
        bb: 100000,
        ante: 100000,
        time: 15,
      },
    ],
  },
};

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

// actualizar fila total premios
function updateTotals() {
  let totalPercent = 0;
  let totalPrize = Number(document.getElementById("totalPrize").value);

  arrayPrizes.forEach((item) => {
    totalPercent += item.percent;
    totalPrize += item.prize;
  });

  totalRow = document.getElementById("totalRow");

  totalRow.cells[1].textContent = totalPercent.toFixed(2);
  totalRow.cells[2].textContent = totalPrize;

  if (totalRow.cells[1].textContent != 100) {
    totalRow.cells[0].style.color = "var(--red)";
    totalRow.cells[1].style.color = "var(--red)";
    totalRow.cells[2].style.color = "var(--red)";
    sendPrizesBtnM.disabled = true;
  } else {
    totalRow.cells[0].style.color = "var(--black)";
    totalRow.cells[1].style.color = "var(--black)";
    totalRow.cells[2].style.color = "var(--black)";
    sendPrizesBtnM.disabled = false;
  }
}
//------------ ejecucion ------------
// //////////////////////////// MAIN ////////////////////////////
// abrir modal settings
settingsBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// cerrar modal settings
closeM.addEventListener("click", () => {
  modal.style.display = "none";

  if (paidPlaces.value == 0) {
    paidPlaces.value = "";
  }
});

// mostrar hora
updateCurrentTime();
setInterval(updateCurrentTime, 1000);

// ***** panel de control *****
// entrada -
downEntry.addEventListener("click", () => {
  entries = Number(document.getElementById("sB").textContent);
  addons = Number(document.getElementById("sAd").textContent);
  playersLeft = Number(document.getElementById("sP").textContent.split("/")[0]);

  if (entries != 0) {
    entries -= 1;
    document.getElementById("sB").textContent = entries;
    playersLeft -= 1;

    if (playersLeft < 0) {
      playersLeft = 0;
    }
    document.getElementById("sP").textContent = playersLeft + "/" + entries;
  }
  if (entries == 0) {
    downEntry.disabled = true;
    upAddon.disabled = true;
    upRebuy.disabled = true;
    downPlayer.disabled = true;
    downRebuy.disabled = true;
    startBtn.disabled = true;
    document.getElementById("sR").textContent = 0;
  }
  if (playersLeft == entries || entries == 0) {
    upPlayer.disabled = true;
    downAddon.disabled = true;
  }
  if (playersLeft == 0) {
    downPlayer.disabled = true;
  }
  if (entries <= addons) {
    document.getElementById("sAd").textContent = entries;
    upAddon.disabled = true;
  }
});

// entrada +
upEntry.addEventListener("click", () => {
  entries = Number(document.getElementById("sB").textContent);
  addons = Number(document.getElementById("sAd").textContent);
  playersLeft = Number(document.getElementById("sP").textContent.split("/")[0]);
  entries += 1;
  document.getElementById("sB").textContent = entries;
  document.getElementById("sP").textContent = playersLeft + 1 + "/" + entries;

  if (entries != 0) {
    downEntry.disabled = false;
    upAddon.disabled = false;
    upRebuy.disabled = false;
    downPlayer.disabled = false;
    startBtn.disabled = false;
  }
});

// recompra -
downRebuy.addEventListener("click", () => {
  rebuys = Number(document.getElementById("sR").textContent);

  if (rebuys != 0) {
    rebuys -= 1;
    document.getElementById("sR").textContent = rebuys;
  }
  if (rebuys == 0) {
    downRebuy.disabled = true;
  }
});

// recompra +
upRebuy.addEventListener("click", () => {
  rebuys = Number(document.getElementById("sR").textContent);
  rebuys += 1;
  document.getElementById("sR").textContent = rebuys;

  if (rebuys != 0) {
    downRebuy.disabled = false;
  }
});

// addon -
downAddon.addEventListener("click", () => {
  entries = Number(document.getElementById("sB").textContent);
  addons = Number(document.getElementById("sAd").textContent);
  playersLeft = Number(document.getElementById("sP").textContent.split("/")[0]);

  if (addons != 0) {
    addons -= 1;
    document.getElementById("sAd").textContent = addons;
  }
  if (addons <= entries) {
    downAddon.disabled = false;
  }
  if (addons < entries) {
    upAddon.disabled = false;
  }
  if (addons == 0) {
    downAddon.disabled = true;
    upAddon.disabled = false;
  }
});

// addon +
upAddon.addEventListener("click", () => {
  entries = Number(document.getElementById("sB").textContent);
  addons = Number(document.getElementById("sAd").textContent);
  playersLeft = Number(document.getElementById("sP").textContent.split("/")[0]);

  if (addons < entries) {
    addons += 1;
    document.getElementById("sAd").textContent = addons;
  }
  if (addons == entries) {
    upAddon.disabled = true;
  }
  if (addons != 0) {
    downAddon.disabled = false;
  }
});

// jugador -
downPlayer.addEventListener("click", () => {
  entries = Number(document.getElementById("sB").textContent);
  addons = Number(document.getElementById("sAd").textContent);
  playersLeft = Number(document.getElementById("sP").textContent.split("/")[0]);

  if (playersLeft != 0) {
    playersLeft -= 1;
    document.getElementById("sP").textContent = playersLeft + "/" + entries;
  }
  if (playersLeft == 0 || entries == 0) {
    downPlayer.disabled = true;
  }
  if (playersLeft < entries) {
    upPlayer.disabled = false;
  }
});

// jugador +
upPlayer.addEventListener("click", () => {
  entries = Number(document.getElementById("sB").textContent);
  addons = Number(document.getElementById("sAd").textContent);
  playersLeft = Number(document.getElementById("sP").textContent.split("/")[0]);

  if (playersLeft < entries) {
    playersLeft += 1;
    document.getElementById("sP").textContent = playersLeft + "/" + entries;
  }
  if (playersLeft == entries) {
    upPlayer.disabled = true;
  }
  if (playersLeft != 0) {
    downPlayer.disabled = false;
  }
});

// //////////////////////////// MODAL ////////////////////////////
// ******************** INFORMACION DEL TORNEO ********************
dateM.value = `${day}/${month}/${year}`;

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    let allFilled = Array.from(inputs).every(
      (input) => input.value.trim() !== ""
    );
    sendInfoBtnM.disabled = !allFilled;
    resetInfoBtnM.disabled = false;
  });
});

// click en enviar
sendInfoBtnM.addEventListener("click", () => {
  title.textContent = nameM.value;
  stack.textContent = parseInt(stackM.value).toLocaleString();
  buyIn.textContent = parseInt(buyInM.value).toLocaleString();
  endRebuys.textContent = " Nivel " + parseInt(endRebuysM.value);
  sendInfoBtnM.disabled = true;
});

// click en resetear
resetInfoBtnM.addEventListener("click", () => {
  title.textContent = "-";
  stack.textContent = "-";
  buyIn.textContent = "-";
  endRebuys.textContent = " Nivel " + "-";
  nameM.value = "";
  stackM.value = "";
  buyInM.value = "";
  endRebuysM.value = "";
  resetInfoBtnM.disabled = true;
});

// ******************** PREMIOS ********************
// generar premios
let arrayPrizes = [];

paidPlaces.addEventListener("input", () => {
  generatePrizesBtnM.disabled = true;
  tablePrizes.style.display = "none";

  if (paidPlaces.value > 0 && Number(totalPrize.value) != 0) {
    generatePrizesBtnM.disabled = false;
  }
});

// click en generar
generatePrizesBtnM.addEventListener("click", () => {
  const distribucion = {
    2: [
      { place: "1°", percent: 60 },
      { place: "2°", percent: 40 },
    ],
    3: [
      { place: "1°", percent: 50 },
      { place: "2°", percent: 30 },
      { place: "3°", percent: 20 },
    ],
    4: [
      { place: "1°", percent: 50 },
      { place: "2°", percent: 25 },
      { place: "3°", percent: 15 },
      { place: "4°", percent: 10 },
    ],
    5: [
      { place: "1°", percent: 40 },
      { place: "2°", percent: 27 },
      { place: "3°", percent: 16 },
      { place: "4°", percent: 10 },
      { place: "5°", percent: 7 },
    ],
    6: [
      { place: "1°", percent: 40 },
      { place: "2°", percent: 25 },
      { place: "3°", percent: 15 },
      { place: "4°", percent: 10 },
      { place: "5°", percent: 6 },
      { place: "6°", percent: 4 },
    ],
    7: [
      { place: "1°", percent: 38 },
      { place: "2°", percent: 24 },
      { place: "3°", percent: 14 },
      { place: "4°", percent: 10 },
      { place: "5°", percent: 7 },
      { place: "6°", percent: 5 },
      { place: "7°", percent: 2 },
    ],
    8: [
      { place: "1°", percent: 37 },
      { place: "2°", percent: 21 },
      { place: "3°", percent: 14 },
      { place: "4°", percent: 9 },
      { place: "5°", percent: 7 },
      { place: "6°", percent: 5 },
      { place: "7°", percent: 4 },
      { place: "8°", percent: 3 },
    ],
    9: [
      { place: "1°", percent: 35 },
      { place: "2°", percent: 20 },
      { place: "3°", percent: 14 },
      { place: "4°", percent: 10 },
      { place: "5°", percent: 7 },
      { place: "6°", percent: 5 },
      { place: "7°", percent: 4 },
      { place: "8°", percent: 3 },
      { place: "9°", percent: 2 },
    ],
    10: [
      { place: "1°", percent: 33 },
      { place: "2°", percent: 21 },
      { place: "3°", percent: 12 },
      { place: "4°", percent: 9 },
      { place: "5°", percent: 7 },
      { place: "6°", percent: 5 },
      { place: "7°", percent: 4 },
      { place: "8°", percent: 3.5 },
      { place: "9°", percent: 3 },
      { place: "10°", percent: 2.5 },
    ],
  };

  const paidPlacesValue = Number(paidPlaces.value);

  if (paidPlacesValue >= 2 && paidPlacesValue <= 10) {
    sendPrizesBtnM.style.display = "block";
    tbodyPrizes.textContent = "";
    tablePrizes.style.display = "block";
    arrayPrizes = [];

    distribucion[paidPlacesValue].forEach((item, i) => {
      let tr = document.createElement("tr");

      let tdPlace = document.createElement("td");
      tdPlace.textContent = item.place;
      tr.appendChild(tdPlace);

      let tdPercent = document.createElement("td");
      let inputPercent = document.createElement("input");
      inputPercent.type = "number";
      inputPercent.value = item.percent;
      inputPercent.style.width = "3.125rem";
      inputPercent.style.height = "0.7rem";

      inputPercent.addEventListener("input", (e) => {
        let newPercent = Number(e.target.value);
        let newPrize = (newPercent / 100) * Number(totalPrize.value);
        inputPrize.value = newPrize.toFixed(2);
        arrayPrizes[i].percent = newPercent;
        arrayPrizes[i].prize = newPrize;
        updateTotals();
      });

      tdPercent.appendChild(inputPercent);
      tr.appendChild(tdPercent);

      let prize = Number(totalPrize.value) * (item.percent / 100);
      let tdPrize = document.createElement("td");
      let inputPrize = document.createElement("input");
      inputPrize.type = "number";
      inputPrize.value = prize.toFixed(2);
      inputPrize.style.width = "4.5rem";
      inputPrize.style.height = "0.7rem";

      inputPrize.addEventListener("input", (e) => {
        let newPrize = Number(e.target.value);
        let newPercent = (newPrize / Number(totalPrize.value)) * 100;
        inputPercent.value = newPercent.toFixed(2);
        arrayPrizes[i].percent = newPercent;
        arrayPrizes[i].prize = newPrize;
        updateTotals();
      });

      tdPrize.appendChild(inputPrize);
      tr.appendChild(tdPrize);
      tbodyPrizes.appendChild(tr);
      arrayPrizes.push({
        place: item.place,
        percent: item.percent,
        prize: prize,
      });
    });
    generatePrizesBtnM.disabled = false;
    updateTotals();
  } else {
    alert("Número de jugadores no válido. Debe estar entre 2 y 10 (incl.)");
    paidPlaces.value = "";
    generatePrizesBtnM.disabled = true;
  }
});
// click en enviar
sendPrizesBtnM.addEventListener("click", () => {
  pPrizes.style.display = "flex";
  pInfoMtt.style.display = "none";
  pPrizes.innerHTML = "";

  arrayPrizes.forEach((item) => {
    pPrizes.innerHTML += `
      ${item.place}: ${item.prize} € |
    `;
  });
});

// ******************** TEMA ********************
// select tema
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

// ******************** NIVELES ********************
Object.keys(levels).forEach((key) => {
  let nameLevel = levels[key].name
    .toLowerCase()
    .normalize()
    .replace(/[áàäâ]/g, "a")
    .replace(/[éèëê]/g, "e")
    .replace(/[íìïî]/g, "i")
    .replace(/[úùüû]/g, "u");

  selectLevels.innerHTML += `
    <option value="${nameLevel}">${levels[key].name}</option>
  `;
});

selectLevels.addEventListener("change", () => {
  let selectedLevel = selectLevels.value
    .toLowerCase()
    .normalize()
    .replace(/[áàäâ]/g, "a")
    .replace(/[éèëê]/g, "e")
    .replace(/[íìïî]/g, "i")
    .replace(/[óòöô]/g, "o")
    .replace(/[úùüû]/g, "u");
  tbodyLevels.innerHTML = `
      <tr>
        <td><input type="number" class="inputLevel" min="1" step="1"></td>
        <td><input type="number" class="inputLevel" min="100" step="100"></td>
        <td><input type="number" class="inputLevel" min="100" step="100"></td>
        <td><input type="number" class="inputLevel" min="100" step="100"></td>
        <td><input type="number" class="inputLevel" step="1" min="10"></td>
      <tr>
    `;
  if (levels[selectedLevel]) {
    const nameLevel = levels[selectedLevel];
    let total = 0;
    let totalH = 0;
    let totalM = 0;
    tbodyLevels.innerHTML = "";

    nameLevel.levels.forEach((level, index) => {
      total += level.time;
      totalH = parseInt(total / 60);
      totalM = (total / 60 - totalH) * 60;
      tbodyLevels.innerHTML += `
          <tr>
            <td>${level.level}</td>
            <td>${level.sb}</td>
            <td>${level.bb}</td>
            <td>${level.ante}</td>
            <td>${level.time}</td>
          </tr>
          `;
    });
    tbodyLevels.innerHTML += `
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>${totalH}:${totalM} h</td>
    </tr>
    `;
  } else {
    console.log("El torneo seleccionado no existe.");
  }
});

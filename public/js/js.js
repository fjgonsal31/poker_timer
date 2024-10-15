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
const inputs = document.querySelectorAll(".input");
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
  let totalPrize = 0;

  arrayPrizes.forEach((item) => {
    totalPercent += item.percent;
    totalPrize += item.prize;
  });

  totalRow = document.getElementById("totalRow");
  if (!totalRow) {
    totalRow = document.createElement("tr");
    totalRow.id = "totalRow";
    let tdTotalPlace = document.createElement("td");
    tdTotalPlace.textContent = "Total";
    totalRow.appendChild(tdTotalPlace);

    let tdTotalPercent = document.createElement("td");
    tdTotalPercent.textContent = totalPercent;
    totalRow.appendChild(tdTotalPercent);

    let tdTotalPrize = document.createElement("td");
    tdTotalPrize.textContent = totalPrize;
    totalRow.appendChild(tdTotalPrize);

    tbodyPrizes.appendChild(totalRow);
  } else {
    totalRow.cells[1].textContent = totalPercent;
    totalRow.cells[2].textContent = totalPrize;
  }

  if (totalRow.cells[1].textContent != 100) {
    totalRow.cells[0].style.color = "var(--red)";
    totalRow.cells[1].style.color = "var(--red)";
    totalRow.cells[2].style.color = "var(--red)";
    sendPrizesBtn.disabled = true;
  } else {
    totalRow.cells[0].style.color = "var(--black)";
    totalRow.cells[1].style.color = "var(--black)";
    totalRow.cells[2].style.color = "var(--black)";
    sendPrizesBtn.disabled = false;
  }
}
//------------ ejecucion ------------

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

// información del torneo
dateM.value = `${day}/${month}/${year}`;

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    let allFilled = Array.from(inputs).every(
      (input) => input.value.trim() !== ""
    );
    sendInfoBtnM.disabled = !allFilled;
    resetInfoBtnM.disabled = false;
    if (input.value.trim().length > 0) { // revisar!!!!!!!!!!!!!!!!!!
      resetInfoBtnM.disabled = true;
    }
  });
});

sendInfoBtnM.addEventListener("click", () => {
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
  resetInfoBtnM.disabled = true;
});

// generar premios
let arrayPrizes = [];

paidPlaces.addEventListener("change", () => {
  generatePrizes.disabled = true;

  if (paidPlaces.value > 0) {
    generatePrizes.disabled = false;
  }
});
generatePrizes.addEventListener("click", () => {
  let distribucion = [];

  if (Number(paidPlaces.value) > 0) {
    sendPrizesBtn.style.display = "block";
    tbodyPrizes.textContent = "";

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
        alert("Número de jugadores no válido. Debe estar entre 3 y 5.");
        return;
    }

    tablePrizes.style.display = "block";
    arrayPrizes = [];

    distribucion.forEach((item, i) => {
      let tr = document.createElement("tr");

      let tdPlace = document.createElement("td");
      tdPlace.textContent = item.place;
      tr.appendChild(tdPlace);

      let tdPercent = document.createElement("td");
      let inputPercent = document.createElement("input");
      inputPercent.type = "number";
      inputPercent.value = item.percent;
      inputPercent.style.width = "50px";
      inputPercent.addEventListener("input", (e) => {
        let newPercent = Number(e.target.value);
        let newPrize = (newPercent / 100) * Number(totalPrize.value);
        inputPrize.value = newPrize;
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
      inputPrize.value = prize;
      inputPrize.style.width = "80px";
      inputPrize.addEventListener("input", (e) => {
        let newPrize = Number(e.target.value);
        let newPercent = (newPrize / Number(totalPrize.value)) * 100;
        inputPercent.value = newPercent;
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
    updateTotals();
  }
});

// enviar premios
sendPrizesBtn.addEventListener("click", () => {
  pPrizes.style.display = "flex";
  pInfoMtt.style.display = "none";
  pPrizes.innerHTML = "";

  arrayPrizes.forEach((item) => {
    pPrizes.innerHTML += `
      ${item.place}: ${item.prize} € |
    `;
  });
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

// rebuys
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
upRebuy.addEventListener("click", () => {
  rebuys = Number(document.getElementById("sR").textContent);
  rebuys += 1;
  document.getElementById("sR").textContent = rebuys;

  if (rebuys != 0) {
    downRebuy.disabled = false;
  }
});

// add ons
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

// players
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

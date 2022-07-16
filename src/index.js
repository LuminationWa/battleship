import "./style.css";
import gameboard from "./modules/gameboard";
import playerFactory from "./modules/playerFactory";
import shipFactory from "./modules/shipFactory";
import gameLoop from "./modules/gameLoop";
import DOMinteraction from "./modules/DOMinteraction";

let submitButton = document.querySelector("button");
let currentGameInfo = {};
let atkButton = document.querySelector(".atkButton");
let currentTurn = "P1 turn";

submitButton.addEventListener("click", function () {
  currentGameInfo = gameLoop().addPlayers(DOMinteraction().updateInfo());
  console.log(currentGameInfo);
  DOMinteraction().displayGameboards(currentGameInfo.p1Gameboard);
  DOMinteraction().displayPlayingField(currentGameInfo.p1Gameboard);
  DOMinteraction().displayNames(currentGameInfo.p1Gameboard.playerInfo.name, currentGameInfo.p2Gameboard.playerInfo.name);
  currentGameInfo.p1Gameboard.placeShip(2, "a1", "a2");
  currentGameInfo.p2Gameboard.placeShip(2, "a1", "a2");
  // currentGameInfo.p2Gameboard.placeShip(3, "b1", "b3");
});

atkButton.addEventListener("click", function () {
  let atkCoords = document.getElementById("p1Attack").value;
  if (currentTurn === "P1 turn") {
    if (currentGameInfo.p2Gameboard.receiveAttack(atkCoords) === false) {
      DOMinteraction().displayTurn("Invalid value, " + currrentTurn);
    } else {
      currentGameInfo.p2Gameboard.receiveAttack(atkCoords);
      console.log("P2." + atkCoords);
      DOMinteraction().displayAttack("P2.",atkCoords);
      currentTurn = "P2 turn";
      DOMinteraction().displayTurn("P2 turn");
      cpuTurn();
    }
  }
});

async function cpuTurn() {
  await new Promise(placeHolder => setTimeout(placeHolder, 3000));
  let CPUattack = currentGameInfo.p2Gameboard.playerInfo.cpuATK(currentGameInfo.p1Gameboard.columns, currentGameInfo.p1Gameboard.rows);
  console.log(CPUattack);
  if (currentGameInfo.p1Gameboard.receiveAttack(CPUattack) === false) {
     DOMinteraction().displayTurn("Invalid value, " + currrentTurn);
  } else {
    currentGameInfo.p1Gameboard.receiveAttack(CPUattack);
    DOMinteraction().displayAttack("P1.", CPUattack);
    currentTurn = "P1 turn";
    DOMinteraction().displayTurn("P1 turn");
  } 
};

const DOMinteraction = () => {
  // Variables
  
  let gameboard1 = document.getElementById("gameboard-1");
  let gameboard2 = document.getElementById("gameboard-2");
  const updateInfo = () => {
    let currentGamePresets = {};
    currentGamePresets.p1Name = document.getElementById("player1-name").value;
    currentGamePresets.p2Name = document.getElementById("player2-name").value;
    currentGamePresets.rows = document.getElementById("board-rows").value;
    currentGamePresets.columns = document.getElementById("board-columns").value;
    return currentGamePresets;
  };
  const displayGameboards = ({ rows, columns }) => {
    gameboard1.style.gridTemplate = `repeat(${rows}, 1fr) / repeat(${columns}, 1fr)`;
    gameboard2.style.gridTemplate = `repeat(${rows}, 1fr) / repeat(${columns}, 1fr)`;
  };
  const displayPlayingField = ({ rows, columns }) => {
    for (let i = 0; i < rows * columns; i++) {
      let letter = 'a';
      let number = i + 1;
      if (columns <= i) {
        number = i % columns + 1;
        letter = String.fromCharCode((i - (i % columns)) / columns + 65).toLowerCase();
      }
      let p1Cell = document.createElement("div");
      p1Cell.classList.add("grid-element");
      p1Cell.id = 'P1.' + letter + number;
      gameboard1.append(p1Cell);
      let p2Cell = document.createElement("div");
      p2Cell.classList.add("grid-element");
      p2Cell.id = 'P2.' + letter + number;
      gameboard2.append(p2Cell);
    }
  };
  const displayNames = (p1Name, p2Name) => {
    let P1display = document.getElementById("P1-Name");
    let P2display = document.getElementById("P2-Name");
    P1display.textContent = p1Name;
    P2display.textContent = p2Name;
  }
  const displayTurn = (str) => {
    let turnDisplay = document.getElementById("display-turn");
    turnDisplay.textContent = str;
  }
  const displayResult = (message) => {
    let resultDisplay = document.getElementById("display-turn-result");
    resultDisplay.textContent = message;
  }
  const displayAttack = (board, position) => {
    let attackedCell = document.getElementById(board + position);
    attackedCell.classList.add("attacked-cell");
  }
  const endGame = () => {
    gameboard1.textContent = "";
    gameboard2.textContent = "";
  }
  return { updateInfo, displayNames, displayGameboards, displayPlayingField, displayTurn, displayResult, displayAttack, endGame};
};

export default DOMinteraction;

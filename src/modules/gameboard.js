// Create Gameboard factory.
// Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.logs or DOM methods to make sure your code is doing what you expect it to.
// Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
// Gameboards should keep track of missed attacks so they can display them properly.
// Gameboards should be able to report whether or not all of their ships have been sunk.

import shipFactory from "./shipFactory";
import DOMinteraction from "./DOMinteraction";
const gameboard = ({ rows, columns }) => {
  // General variables
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let shipsArray = [];
  let sunkShipsArray = [];
  let missedAttacks = [];

  // Functions

  const placeShip = (shipLength, coord1, coord2) => {
    // Sets position using two coordenates as base, then fills the remaining one with the frp function and after pushes the ship to the array contaning every ship on the board
    let ship = shipFactory(shipLength);
    ship.position = [coord1, coord2];
    fillRemainingPositions(coord1, coord2, ship);
    shipsArray.push(ship);
  };

  const fillRemainingPositions = (coord1, coord2, ship) => {
    // Separates the coordinates by axis
    let coord1Array = coord1.split("");
    let coord2Array = coord2.split("");
    // Higher number needs to be first so the result is positive
    // Y axis represents letters and X axis numbers
    let rowsDif =
      alphabet.indexOf(coord2Array[0].toUpperCase()) -
      alphabet.indexOf(coord1Array[0].toUpperCase());
    let columnsDif = coord2Array[1] - coord1Array[1];
    if (rowsDif === 0) {
      // As diagonally placed ships are not allowed it simply takes the shared coord and adds to the one that's not
      for (let i = 1; i < columnsDif; i++) {
        ship.position.push(`${coord1Array[0]}${parseInt(coord1Array[1]) + i}`);
      }
    } else if (columnsDif === 0) {
      for (let i = 1; i < rowsDif; i++) {
        ship.position.push(`${alphabet[alphabet.indexOf(coord1Array[0].toUpperCase()) + i].toLowerCase()}${coord1Array[1]}`);
      }
    }
  };

  const receiveAttack = (atkCoords) => {
    // Checks if attack is included in the positions array and calls the hit function / marks the atk as a missed one accordingly
    for (let i = 0; i < shipsArray.length; i++) {
      if (missedAttacks.includes(atkCoords) || shipsArray[i].hitsArray.includes(atkCoords)) {
        return false;
      } else if (shipsArray[i].position.includes(atkCoords)) {
        shipsArray[i].hit(atkCoords);
        console.log(shipsArray[i].isSunk());
        checkSunkShips();
        // If by the last iteration no hit has been registered pushes the attack as a missed one
      } else if (i === shipsArray.length - 1) missedAttacks.push(atkCoords);
    }
  };

  const checkSunkShips = () => {
    shipsArray.forEach(ship => {
      if (ship.isSunk()) sunkShipsArray.push(ship);
      console.log(sunkShipsArray, shipsArray);
      if (sunkShipsArray.length === shipsArray.length) {
        DOMinteraction().displayResult("Someone wins!")
        DOMinteraction().endGame();
        };
    })
  }
  return { rows, columns, shipsArray, missedAttacks, placeShip, receiveAttack, checkSunkShips };
};

export default gameboard;
const shipFactory = require("./shipFactory");
const gameboard = require("./gameboard");
const playerFactory = require("./playerFactory");

// Ship factory tests

test("Test 1", () => {
  expect(shipFactory(3).length).toEqual(3);
});

test("Testing if untouched ship is detected as sunk", () => {
  expect(shipFactory(3).isSunk()).toBeFalsy;
});

let testShipGeneral = shipFactory(3);

test("Testing if number of hits === length is detected as sunk", () => {
  let testShip = shipFactory(3);
  testShip.hit("a");
  testShip.hit("a");
  testShip.hit("a");
  expect(testShip.isSunk()).toBeTruthy;
});

// Gameboard tests

let gameBoard = gameboard();
gameBoard.placeShip(testShipGeneral, "a1", "a5");

test("Gameboard test 1", () => {
  expect(
    gameBoard.receiveAttack("a1")
  );
});

// test("Gameboard test 2", () => {
//   expect(
//     gameBoard.placeShip(testShip, "a1", "d1")
//   ).toEqual(3);
// });


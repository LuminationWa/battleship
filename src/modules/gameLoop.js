import playerFactory from "./playerFactory";
import gameboard from "./gameboard";
import DOMinteraction from "./DOMinteraction";

const gameLoop = () => {
    // const mainLoop = () => {
    //     for (let i = 0; i < 1; i) {
    //         switch(currentTurn) {
    //             case p1Turn:
    //                 DOMinteraction().displayTurn("P1 turn");
    //                 break;
    //             case p2Turn:
    //                 DOMinteraction().displayTurn("P2 turn");
    //                 break;
    //             case endGame:
    //                 break;
    //         }
    //     }
    // }
    const addPlayers = ({ p1Name, p2Name, rows, columns }) => {
        let p1Gameboard = gameboard({rows, columns});
        let p2Gameboard = gameboard({rows, columns});
        p1Gameboard.playerInfo = playerFactory(p1Name, 1);
        p2Gameboard.playerInfo = playerFactory(p2Name, 2);
        return {p1Gameboard, p2Gameboard};
      };
    return {addPlayers};
};

export default gameLoop;
// Players can take turns playing the game by attacking the enemy Gameboard.
// The game is played against the computer, so make ‘computer’ players capable of making random plays. The AI does
// not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).

const playerFactory = (name, playerOrder) => {
  const cpuATK = (maxY, maxX) => {
    // Expected values are in numbers
    let yAXis = String.fromCharCode(Math.floor(Math.random() * maxY) + 65).toLowerCase();
    let xAXis = Math.floor(Math.random() * maxX) + 1;
    console.log(`${yAXis}${xAXis}`);
    return `${yAXis}${xAXis}`;
  };  
  return {name, playerOrder, cpuATK};
  };
  
export default playerFactory;
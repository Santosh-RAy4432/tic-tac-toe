import './App.css';
import Player from './components/Player.jsx';
import Gameboard from './components/GameBoard.jsx';
import {useState} from 'react';
import Log from './components/Log.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import GameOver from './components/GameOver.jsx';


const initialGameBoard =[
  [null,null,null],
  [null,null,null],
  [null,null,null],
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if (gameTurns.length >0 && gameTurns[0].player==='X'){
    currentPlayer='0';
   
  }
return currentPlayer;
}
function App() {
  // const [hasWinner, setHasWinner] = useState(false);
  const[gameTurns, setGameTurns]= useState([]);
  // const[activePlayer, setActivePlayer]= useState('X');
 const activePlayer= deriveActivePlayer(gameTurns);
 let gameBoard = [...initialGameBoard.map(array => [...array])];
for (const turn of gameTurns){
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard[row][col]= player;
}

let winner;
 for (const combinations of WINNING_COMBINATIONS) {
  const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
  const secondSquareSymbol =gameBoard[combinations[1].row][combinations[1].column];
  const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];

  if (firstSquareSymbol && 
    firstSquareSymbol===secondSquareSymbol && 
    firstSquareSymbol===thirdSquareSymbol)
    {
winner = firstSquareSymbol;
    }
 }

 const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex){
    // setActivePlayer((curActivePlayer)=> curActivePlayer ==='X'? '0':'X');
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      // let currentPlayer = 'X';
      // if (prevTurns.length >0 && prevTurns[0].player==='x'){
      //   currentPlayer='0';
       
      // }

    
      const updatedturns = [
        {square:{row:rowIndex, col:colIndex},player: currentPlayer},
        ...prevTurns];
        return updatedturns;
    });
  }

  function handleRestart(){
setGameTurns([]);
  }
  return (
<main>
  <div id='game-container'>
    <ol id='players' className='highlight-player'>
      <Player initialName="player 1" symbol="X" isActive={activePlayer==='X'}/>
      <Player initialName="player 2" symbol="0" isActive={activePlayer==='0'}/>
     
    </ol>
    {(winner || hasDraw)&& ( <GameOver winner = {winner} onRestart={handleRestart}/>)}
<Gameboard onSelectSquare={handleSelectSquare} 
board={gameBoard}/>
  </div>
  <Log turns={gameTurns}/>
</main>
  );
}

export default App;

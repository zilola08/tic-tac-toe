import React,{ useState } from 'react'
import Spot from './Spot'
import spotsInfo from '../spotsInfo';
import winPos from '../winPos';
import NewGameButton from './NewGameButton';
import GameStatusText from './GameStatusText';

const Gameboard = () => {

  const [player,setPlayer] = useState('X');
  const [winner,setWinner] = useState(null);
  const [gameEnd,setGameEnd] = useState(false);
  const [newBoard,setNewBoard] = useState(false);

  const switchPlayer = () => {
    if (player == 'X') {
      setPlayer('O');
    }
    if (player == 'O') {
      setPlayer('X');
    }
  }

  const checkWinner = () => {
    const markedValues = spotsInfo.map(value => value.marked);
    for (let i = 0; i < winPos.length; i++) {
      if
        (
        spotsInfo[winPos[i][0]].player
        && spotsInfo[winPos[i][0]].player == spotsInfo[winPos[i][1]].player
        && spotsInfo[winPos[i][0]].player == spotsInfo[winPos[i][2]].player
      ) {
        setWinner(spotsInfo[winPos[i][0]].player);
        spotsInfo[winPos[i][0]].winPos = true;
        spotsInfo[winPos[i][1]].winPos = true;
        spotsInfo[winPos[i][2]].winPos = true;
        setGameEnd(true);
        return;
      }
    }
    if (!winner && markedValues.every(v => v === true)) {
      setGameEnd(true);
    }
  }

  const resetGame = () => {
    spotsInfo.forEach(spot => {
      spot.marked = false;
      spot.player = null;
      spot.winPos = false;
    });

    setGameEnd(false);
    setWinner(null);
    setPlayer('X');
    setNewBoard(!newBoard);
  }

  const boardRender = () => spotsInfo.map(spot => {
    return (
      <Spot key={spot.id} id={spot.id} switchPlayer={switchPlayer} player={player} checkWinner={checkWinner} gameEnd={gameEnd} spotsInfo={spotsInfo} newBoard={newBoard} winPos={spot.winPos} />
    )
  })

  return (
    <div >
      <GameStatusText player={player} winner={winner} gameEnd={gameEnd} spotsInfo={spotsInfo} />
      <div className='board'>{boardRender()}</div>
      <NewGameButton resetGame={resetGame} />
    </div>
  )
}

export default Gameboard
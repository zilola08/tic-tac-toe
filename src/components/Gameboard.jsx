import React,{ useState } from 'react'
import Spot from './Spot'
import spotsInfo from '../spotsInfo';
import winPos from '../winPos';
import NewGameButton from './NewGameButton';

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
        // console.log(spotsInfo)
        return;
      }
    }
  }

  const renderGamestatus = () => {
    let gameStatusText;
    const markedValues = spotsInfo.map(value => value.marked);

    if (gameEnd) {
      gameStatusText = <p className='gameStatusText'>Game over! {winner} won!</p>
    } else {
      gameStatusText = <p className='gameStatusText'> { player}`s turn:</p>
    }

    if (!winner && markedValues.every(v => v === true)) {
      gameStatusText = <p className='gameStatusText'>Game over! No winner!</p>
    }

    return gameStatusText;
  }


  const resetGame = () => {
    spotsInfo.forEach(spot => {
      spot.marked = false;
      spot.player = null;
      spot.winPos = false;
    });
    console.log(spotsInfo);
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
      {renderGamestatus()}
      <div className='board'>{boardRender()}</div>
      <NewGameButton resetGame={resetGame} />
    </div>
  )
}

export default Gameboard
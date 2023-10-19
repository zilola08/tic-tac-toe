import React from 'react'
import clsx from "clsx";

const GameStatusText = (props) => {
  const winClass = "text-won";
  const tieClass = "text-won";

  const tie = () => {
    const markedValues = props.spotsInfo.map(value => value.marked);
    if (!props.winner && markedValues.every(v => v === true)) {
      return true;
    } else {
      return false;
    }
  }

  const gameStatusText = () => {
    let gameStatusText;

    if (props.gameEnd) {
      gameStatusText = `Game over! ${props.winner} won!`
    } else {
      gameStatusText = `${props.player}s turn:`
    }

    if (tie()) {
      gameStatusText = "Game over! No winner!"
    }

    return gameStatusText;
  }

  return (
    <p className={clsx('gameStatusText',{ [winClass]: props.gameEnd },{ [tieClass]: tie() })}>{gameStatusText()}</p>
  )
}

export default GameStatusText
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

    if (props.gameEnd) {
      if (tie()) {
        return "Game over! No winner!"
      }
      return `Game over! ${props.winner} won!`
    }
    else {
      return `${props.player}s turn:`
    }
  }

  return (
    <p className={clsx('gameStatusText',{ [winClass]: props.gameEnd },{ [tieClass]: tie() })}>{gameStatusText()}</p>
  )
}

export default GameStatusText
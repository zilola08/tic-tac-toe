import React from 'react'

const GameStatusText = (props) => {

  const gameStatusText = () => {
    let gameStatusText;
    const markedValues = props.spotsInfo.map(value => value.marked);

    if (props.gameEnd) {
      gameStatusText = `Game over! ${props.winner} won!`
    } else {
      gameStatusText = `${props.player}s turn:`
    }

    if (!props.winner && markedValues.every(v => v === true)) {
      gameStatusText = "Game over! No winner!"
    }

    return gameStatusText;
  }

  return (
    <p className='gameStatusText'>{gameStatusText()}</p>
  )
}

export default GameStatusText
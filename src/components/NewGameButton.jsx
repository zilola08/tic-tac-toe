import React from 'react'

const NewGameButton = ({resetGame}) => {
  return (
    <div>
      <button onClick={resetGame} className='newGameButton'>New Game</button>
    </div>
  )
}

export default NewGameButton
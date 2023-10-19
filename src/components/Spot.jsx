import React from 'react';
import { useState,useEffect } from 'react';

const Spot = (props) => {
  const [innerText,setInnerText] = useState();

  useEffect(() => { setInnerText('') },[props.newBoard])

  const mark = (e) => {
    const i = e.target.value - 1;
    if (!props.spotsInfo[i].marked) {
      props.spotsInfo[i].marked = true;
      props.spotsInfo[i].player = props.player;
      setInnerText(props.spotsInfo[i].player);
      // console.log(props.spotsInfo[i])
      props.switchPlayer();
      props.checkWinner();
    }
    else (console.log("already marked spot"));
  }

  if (props.gameEnd && props.winPos) {
    return (
      <button disabled={props.gameEnd} className='card winner' value={props.id}>{innerText}</button>
    )
  }

  if (props.gameEnd && !props.winPos) {
    return (
      <button disabled={props.gameEnd} className='card notWinner' value={props.id}>{innerText}</button>
    )
  }

  return (
    <button disabled={props.gameEnd} onClick={mark} className='card' value={props.id}>{innerText}</button>
  )
  // return (
  // use clsx
  // )
}

export default Spot
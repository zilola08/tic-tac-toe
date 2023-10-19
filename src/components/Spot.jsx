import clsx from 'clsx';
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

  let haveWinner = props.gameEnd && props.winPos;
  let noWinner = props.gameEnd && !props.winPos;

  return (
    <button
      disabled={props.gameEnd}
      onClick={mark}
      className={
        clsx('card',
          { ["winner"]: haveWinner },
          { ["notWinner"]: noWinner })
      }
      value={props.id}>{innerText}
    </button>
  )
}

export default Spot
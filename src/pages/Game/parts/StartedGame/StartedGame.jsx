import styles from "./startedGame.module.scss";
import React, { useMemo, useState } from "react";
import copyImage from "../../../../assets/copy.svg";

export const StartedGame = (
 { gameId}
  ) => {
    console.log(gameId)
  const [copied, setCopied] = useState(false);
  const gameIdShort = useMemo(()=> ( "#"+ gameId.substring(8, 0)), [gameId]);

  function copyTask() { const el = document.createElement('input');
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select(); document.execCommand('copy'); 
      document.body.removeChild(el); setCopied(true);
  } 


  return (
    <div className={styles.game__started}>
      <h3>Ожидание </h3>
      <div className={styles.clockLoader}></div>
      <span className={styles.copy}>
         <button onClick={copyTask} style ={{border:0, background: `transparent`, cursor: `pointer`}}>
           <img src={copyImage} alt="" />
           <span>{gameIdShort}</span>
         </button>
       </span>
    </div>
    
  );
};

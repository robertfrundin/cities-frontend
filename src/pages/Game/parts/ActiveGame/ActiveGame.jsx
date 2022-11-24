import React from "react";
import styles from "./activeGame.module.scss";
import copyImage from "../../../../assets/copy.svg";
import Progressbar from "../../../../components/Progressbar/Progressbar";
import { useState } from "react";

export const ActiveGame = ({ city, gameId, round }) => {
  const [cityValue, setCityValue] = useState("");
  return (
    <div className={styles.active__game}>
      <button className={styles.close}></button>
      <h2>Текущее слово:</h2>

      <h1 className={styles.active__city}>{city.value}</h1>
      <input
        className={styles.input}
        defaultValue={city.lastLetter}
        type="text"
        value={cityValue}
        onChange={(e) => setCityValue(e.target.value)}
      />
      <Progressbar city={city} gameId={gameId} round={round} />

      <span className={styles.copy}>
        <img src={copyImage} alt="" />
        <span>#8fdad7</span>
<<<<<<< HEAD
      </span>      
=======
      </span>
>>>>>>> 8e13d024c50c351da2b856e9e70eebf38d33d3ae
    </div>
  );
};

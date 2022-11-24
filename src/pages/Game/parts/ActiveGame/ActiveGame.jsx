import React, { useState } from "react";
import styles from "./activeGame.module.scss";
import copyImage from "../../../../assets/copy.svg";
// import Progressbar from "../../../../components/Progressbar/Progressbar";
// import { Button } from "../../../../components/Button/Button";

export const ActiveGame = ({ city, sendCity,clickHandler }) => {

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
      {/* <Progressbar clickHandler={() => sendCity(cityValue)} /> */}
      <button
        className={styles.btn}
        onClick={() => {
          clickHandler();
        }}
      >
        <div className={styles.progressbar}>
          <div
            className={styles.progressColor}
            style={{
              height: `100%`,
              width: `100%`,
              transition: "width 1s linear",
            }}
          ></div>
          <span className={styles.progressPercent}> ОТПРАВИТЬ </span>
        </div>
      </button>
      <span className={styles.copy}>
        <img src={copyImage} alt="" />
        <span>#8fdad7</span>

      </span>

    </div>
  );
};

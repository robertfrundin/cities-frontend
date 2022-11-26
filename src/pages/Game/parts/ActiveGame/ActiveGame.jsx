import React, { useCallback, useEffect, useMemo, useState } from "react";

import styles from "./activeGame.module.scss";
import copyImage from "../../../../assets/copy.svg";
import uploadCity from "../../../../grpc-services/city-updater-service/service";
export const ActiveGame = ({ duration, city, gameId, round }) => {
  const [cityValue, setCityValue] = useState("");
  const [inputColor, setInputColor] = useState("");
  const [progressPercent, setProgressPercent] = useState(100);
  const decreaseSpeed = useMemo(() => 100 / duration, [duration]);

  useEffect(() => {
    console.log(duration + " duration");
    console.log(decreaseSpeed + "decreaseSpeed");
    setTimeout(() => {
      setProgressPercent(progressPercent - decreaseSpeed);
      console.log(progressPercent);
    }, 1000);
  });

  return (
    <div className={styles.active__game}>
      <h2>Текущее слово:</h2>

      <h1 className={styles.active__city}>{city}</h1>
      <input
        id="input"
        className={styles.input + " " + styles[inputColor]}
        type="text"
        value={cityValue}
        onChange={(e) => setCityValue(e.target.value)}
      />
      <button
        type="submit"
        className={styles.btn}
        onClick={() => {
          uploadCity(cityValue, gameId, round).then((status) => {
            switch (status) {
              case 0: {
                setInputColor("green");
                break;
              }
              case 1: {
                setInputColor("red");
                break;
              }
              case 2: {
                setInputColor("yellow");
                break;
              }
            }
          });
          setCityValue("");
        }}
      >
        <div className={styles.progressbar}>
          <div
            className={styles.progressColor}
            style={{
              height: `100%`,

              width: `${progressPercent}%`,

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

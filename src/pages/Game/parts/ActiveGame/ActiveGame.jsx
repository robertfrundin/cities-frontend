import React, { useState, useEffect } from "react";
import styles from "./activeGame.module.scss";
import copyImage from "../../../../assets/copy.svg";
import uploadCity from "../../../../grpc-services/city-updater-service/service";
export const ActiveGame = ({ city, gameId, round }) => {
  const [cityValue, setCityValue] = useState("");
  const [inputColor, setInputColor] = useState("");
  const onFormSubmit = e => {
    e.preventDefault();
    // send state to server with e.g. `window.fetch`
  }
  return (
    <div className={styles.active__game}>
      <h2>Текущее слово:</h2>

      <h1 className={styles.active__city}>{city}</h1>
      <form onSubmit={onFormSubmit} className= {styles.form}>
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
                  alert("молодец");
                  setInputColor("green__animated");
                  break;
                }
                case 1: {
                  alert("города нет в базе");
                  setInputColor("yellow__animated");
                  break;
                }
                case 2: {
                  setInputColor("red__animated");
                  alert("город уже был назван");
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
                width: `100%`,
                // width: `${Math.round(filled * 0.006666667)}%`,
                transition: "width 1s linear",
              }}
            ></div>
            <span className={styles.progressPercent}> ОТПРАВИТЬ </span>
          </div>
        </button>
      </form>
      <span className={styles.copy}>
        <img src={copyImage} alt="" />
        <span>#8fdad7</span>
      </span>
    </div>
  );
};

import React, { useEffect, useMemo, useState } from "react";
import styles from "./activeGame.module.scss";
import copyImage from "../../../../assets/copy.svg";
import uploadCity from "../../../../grpc-services/city-updater-service/service";

export const ActiveGame = ({ duration, city, gameId, round, lastLetter }) => {
  const [cityValue, setCityValue] = useState(lastLetter);
  const [inputColor, setInputColor] = useState("");
  const [currentPercent, setCurrentPercent] = useState();
  const decreaseSpeed = useMemo(() => 100 / duration, [duration]);
  const [copied, setCopied] = useState(false);
  const gameIdShort = useMemo(() => "#" + gameId.substring(8, 0), [gameId]);
  function copyTask() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setCityValue(lastLetter);
    window.localStorage.setItem("timer", "100");
    console.log("1");

    const newIntervalId = setInterval(() => {
      const timerFromCookie = window.localStorage.getItem("timer");
      window.localStorage.setItem(
        "timer",
        Number(timerFromCookie) - decreaseSpeed
      );
      setCurrentPercent(window.localStorage.getItem("timer"));
      console.log("a");
      console.log(window.localStorage.getItem("timer"));
    }, 1000);

    return () => {
      clearInterval(newIntervalId);
      window.localStorage.removeItem("timer");
    };
  }, [city]);

  return (
    <div className={styles.active__game}>
      <h2>Текущее слово:</h2>

      <h1 className={styles.active__city}>{city}</h1>

      <form onSubmit={onFormSubmit} className={styles.form}>
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
              id="progress"
              className={styles.progressColor}
              style={{
                height: `100%`,
                width: `${currentPercent}%`,
                transition: "width 1s linear",
              }}
            ></div>
            <span className={styles.progressPercent}> ОТПРАВИТЬ </span>
          </div>
        </button>
      </form>

      <span className={styles.copy}>
        <button
          onClick={copyTask}
          style={{ border: 0, background: `transparent`, cursor: `pointer` }}
        >
          <img src={copyImage} alt="" />
          <span>{gameIdShort}</span>
        </button>
      </span>
    </div>
  );
};

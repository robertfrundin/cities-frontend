import React, { useState, useEffect, useCallback } from "react";
import styles from "./progressbar.module.css";
import { uploadCity } from "../../grpc-services/city-updater-service/service";

import Cookies from "js-cookie";
import { CityUpdaterServiceClient } from "../../grpc-services/city-updater-service/city_updater_grpc_web_pb";
import { UpdateCityRequest } from "../../grpc-services/city-updater-service/city_updater_pb";

const client = new CityUpdaterServiceClient(
  "http://172.21.132.121:9090",
  null,
  null
);

export default function Progressbar({ city, gameId, round }) {
  const [filled, setFilled] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const cb = (err, res) => {
    setFilled(false);
    console.log("inside callback");
    console.log(res);
    console.log(err);
  };
  const cityUploadCallback = useCallback(() => {
    const request = new UpdateCityRequest();
    request.setCityName(city.value);
    request.setRoomId(gameId);
    request.setTokenRound(round);
    request.setAuthToken(Cookies.get("authToken"));
    console.log(request);
    client.updateCity(request, {}, cb);
  }, [city.value, gameId, round, cb]);
  return (
    <button className={styles.btn} onClick={cityUploadCallback}>
      <div className={styles.progressbar}>
        <div
          className={styles.progressColor}
          style={{
            height: "100%",
            width: `${Math.round(filled * 0.006666667)}%`,
            transition: "width 1s linear",
          }}
        ></div>
        <span className={styles.progressPercent}> {filled.toString()} </span>
      </div>
    </button>
  );
}

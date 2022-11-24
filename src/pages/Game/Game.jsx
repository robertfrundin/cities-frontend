import styles from "./game.module.scss";
import { Player } from "../../components/Player/Player";
import { ActiveGame } from "./parts/ActiveGame/ActiveGame";
import { useCallback, useEffect } from "react";
import connectToGameStream from "../../grpc-services/game-info-service/service";
import { uploadCity } from "../../grpc-services/city-updater-service/service";
import { useState } from "react";
import Cookies from "js-cookie";
import { upload } from "@testing-library/user-event/dist/upload";
import { StartedGame } from "./parts/StartedGame/StartedGame";
import { FinishedGame } from "./parts/FinishedGame/FinishedGame"

export const Game = () => {
  const [city, setCity] = useState({});
  const [round, setRound] = useState(0);
  const [players, setPlayers] = useState([]);
  const gameId = window.location.pathname.slice(6);
  useEffect(() => {
    connectToGameStream(gameId, setPlayers, setCity, setRound);
  });

  return (
    <div className={styles.wrap}>
      <main className={styles.content}>
        <div className={styles.players}>
          <ul>
            <Player name={Cookies.get("userName")} score={0}></Player>
            {players.map((player) => (
              <Player
                key={player.name}
                name={player.name}
                score={player.score}
              ></Player>
            ))}
          </ul>
        </div>
        <div className={styles.board}>

          {/* <FinishedGame></FinishedGame> */}
          <ActiveGame city={city} gameId={gameId} round={round} />

        </div>
      </main>
    </div>
  );
};

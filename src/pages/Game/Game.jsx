import styles from "./game.module.scss";
import { Player } from "../../components/Player/Player";
import { ActiveGame } from "./parts/ActiveGame/ActiveGame";
import { FinishedGame } from "./parts/FinishedGame/FinishedGame";
import { useEffect } from "react";
import connectToGameStream from "../../grpc-services/game-info-service/service";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
export const Game = () => {
  const [city, setCity] = useState({});
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const gameId = window.location.pathname.slice(6);
    connectToGameStream(gameId, setPlayers, setCity);
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
          <ActiveGame city={city} />
        </div>
      </main>
    </div>
  );
};

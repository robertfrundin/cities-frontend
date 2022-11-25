import styles from "./game.module.scss";
import { Player } from "../../components/Player/Player";
import { ActiveGame } from "./parts/ActiveGame/ActiveGame";
import { FinishedGame } from "./parts/FinishedGame/FinishedGame";
import { StartedGame } from "./parts/StartedGame/StartedGame";
import { useCallback, useEffect } from "react";
import connectToGameStream from "../../grpc-services/game-info-service/service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getUserData from "../../grpc-services/user-service/service";
import joinRoomByLink from "../../grpc-services/room-joiner-service/service";

export const Game = () => {
  const [status, setStatus] = useState(0);
  const [city, setCity] = useState({});
  const [round, setRound] = useState(0);
  const [players, setPlayers] = useState([]);
  const [gameId, setGameId] = useState(window.location.pathname.slice(6));
  const navigate=useNavigate()
  useEffect(() => {
    getUserData()
      .then(() => joinRoomByLink(gameId))
      .then((stat) => console.log(stat + " gameJoin status"))
      .then(() => {
        const stream = connectToGameStream(gameId);
        stream.on("data", (response) => {
          const maybePlayers = response.getPlayersInfoList();
          console.log(maybePlayers);
          const preparedPlayers = maybePlayers
            .map((player) => ({
              name: player.getUserName(),
              score: player.getUserScore(),
            }))
            .sort((a, b) => {
              if (b.score < a.score) {
                return 1;
              } else if (b.score > a.score) {
                return -1;
              }
              return 0;
            });
          setPlayers(preparedPlayers);
          const city = response.getCurrentCity();
          const lastLetter = response.getRequiredLetter();
          const round = response.getRound();

          setRound(round);

          setCity((prevCity) => ({
            ...prevCity,
            value: city,
            lastLetter,
          }));

          const gameStatus = response.getGameStage();
          console.log(gameStatus);
          setStatus(gameStatus);
        });
        stream.on("status", (status) => {
          console.log(status.code + " status code");
        });
        stream.on("end", (end) => {
          console.log("end");
        });
      });
  }, []);
  return (
    <div className={styles.wrap}>
      <main className={styles.content}>
        <div className={styles.players}>
          <ul>
            {players
              .sort((a, b) => a.score - b.score)
              .map((player) => (
                <Player
                  key={player.name}
                  name={player.name}
                  score={player.score}
                />
              ))}
          </ul>
        </div>
        <div className={styles.board}>
        <button 
          className={styles.close}
          onClick={() => {
            navigate('/');
          }}
        ></button>

          {status == 0 && <StartedGame />}
          {status == 1 && (
            <ActiveGame city={city} gameId={gameId} round={round} />
          )}
          {status == 2 && <FinishedGame />}
        </div>
      </main>
    </div>
  );
};

import styles from "./game.module.scss";
import { Player } from "../../components/Player/Player";
import { ActiveGame } from "./parts/ActiveGame/ActiveGame";
import { FinishedGame } from "./parts/FinishedGame/FinishedGame";
import { StartedGame } from "./parts/StartedGame/StartedGame";
import { useEffect } from "react";
import connectToGameStream from "../../grpc-services/game-info-service/service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import joinRoomByLink from "../../grpc-services/room-joiner-service/service";

import getAuthToken from "../../grpc-services/token-service/service";
import getNickName from "../../grpc-services/nickname-service/service";
import Cookies from "js-cookie";

export const Game = () => {
  const [status, setStatus] = useState(0);
  const [city, setCity] = useState({});
  const [round, setRound] = useState(0);
  const [players, setPlayers] = useState([]);
  const [gameId, setGameId] = useState(window.location.pathname.slice(6));
  const navigate = useNavigate();
  useEffect(() => {
    const getGameStream = () => {
      const stream = connectToGameStream(gameId);
      stream.on("data", (response) => {
        const maybePlayers = response.getPlayersInfoList();
        console.log(maybePlayers);

        const preparedPlayers = maybePlayers.map((player) => ({
          name: player.getUserName(),
          score: player.getUserScore(),
        }));
        setPlayers(preparedPlayers);
        const cityFromServer = response.getCurrentCity();
        const lastLetter = response.getRequiredLetter();
        const round = response.getRound();

        setRound(round);
        setCity({ name: cityFromServer, lastLetter });

        const gameStatus = response.getGameStage();
        console.log(gameStatus);
        setStatus(gameStatus);
      });
      stream.on("status", (status) => {
        console.log(status.code + " status code");
        console.log(status + "status в стриме");
      });
      stream.on("end", (end) => {
        console.log("end");

        console.log(end + "конец стрима");
      });
    };
    const currentToken = Cookies.get("authToken");
    if (currentToken === undefined) {
      getAuthToken()
        .then(() => joinRoomByLink(gameId))
        .then((stat) => console.log(stat + " gameJoin status"))
        .then(() => getGameStream());
    } else {
      getNickName()
        .then(() => {
          joinRoomByLink(gameId)
            .then((stat) => console.log(stat + " gameJoin status"))
            .then(() => getGameStream())
            .catch((badStatus) => {
              console.log("unable to connect, status: ");
              console.log(badStatus);
              navigate("/404");
            });
        })
        .catch(() =>
          getAuthToken()
            .then(() => joinRoomByLink(gameId))
            .then((stat) => console.log(stat + " gameJoinStatus"))
            .then(() => getGameStream())
        );
    }
  }, []);
  return (
    <div className={styles.wrap + " animated"}>
      <main className={styles.content}>
        <div className={styles.players}>
          <ul>
            {/*<Player key={""} name={""} score={""} />*/}
            {players
              .sort((a, b) => a.score - b.score)
              .map((player) => (
                <Player key={player.name} player={player} />
              ))}
          </ul>
        </div>
        <div className={styles.board}>
          <button
            className={styles.close}
            onClick={() => {
              navigate("/");
            }}
          ></button>

          {status === 0 && <StartedGame />}
          {status === 1 && (
            <ActiveGame city={city.name} gameId={gameId} round={round} />
          )}
          {status === 2 && <FinishedGame />}
        </div>
      </main>
    </div>
  );
};

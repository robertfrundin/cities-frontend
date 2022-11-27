import styles from "./finishedGame.module.scss";
import zebra from "../../../../assets/avatars/4.svg";
import randombutton from "../../../../assets/randomroomicon.svg";
import roomslist from "../../../../assets/roomsicon.svg";
// import restartbutton from '../../../../assets/restart2.svg'

import getRandomRoom from "../../../../grpc-services/random-joiner-service/service";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/Button/Button";

export const FinishedGame = ({ winner, goToRandom, closeStream, changeId }) => {
  const navigate = useNavigate();
  const getHash = function (str) {
    var hash = 0,
      i,
      chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
      chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };
  async function joinRandomRoom() {
    const roomId = await getRandomRoom();
    console.log(roomId + "room Id v randome");
    navigate(`/game/${roomId}`);
    return roomId;
  }
  async function toRoomsList() {
    navigate(`/rooms`);
  }
  return (
    <div className={styles.game__finished}>
      <div className={styles.finish__result}>
        <h3>ИГРА ОКОНЧЕНА</h3>
        <img
          className={styles.winner__image}
          src={require(`../../../../assets/avatars/${Math.abs(
            getHash(winner.id) % 6
          )}.svg`)}
          alt=""
        />
        <div className={styles.winner__info}>
          <h3>ПОБЕДИТЕЛЬ:</h3>
          <h3>{winner.name}</h3>
        </div>
      </div>
      <div className={styles.finish__buttons}>
        <Button
          img
          alt="random"
          src={randombutton}
          handlerClick={() => {
            closeStream();
            joinRandomRoom().then((x) => {
              changeId(x);
              goToRandom();
            });
          }}
          className={styles.randomgame}
          text={"Случайная игра"}
          size="medium"
        ></Button>
        <Button
          img
          alt="roomslist"
          src={roomslist}
          handlerClick={toRoomsList}
          className={styles.roomlist}
          text={"Cписок комнат"}
          size="medium"
        ></Button>
      </div>
    </div>
  );
};

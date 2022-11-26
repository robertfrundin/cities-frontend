import styles from "./room.module.scss";
import avatar from "../../assets/avatars/4.svg";
import playerLogo from "../../assets/userlogo.svg";
import flagIcon from "../../assets/Flag_of_Russia.svg.webp";
import { useNavigate } from "react-router-dom";

export const Room = ({
  type,
  className,
  roomId,
  roomLogo,
  playerCount,
  roomSize,
  language,
  isOpen,
}) => {
  function ellipsify (str) {
    if (str.length > 10) {
        return ("#"+ str.substring((str.length-8), str.length));
    }
    else {
        return str;
    }
}
  isOpen = true;
  language = flagIcon;

  if (playerCount === roomSize) {
    isOpen = false;
  }
  const nagitate = useNavigate();
  const clickHandler = (id) => {
    nagitate(`/game/${id}`);
  };
  return (
    <div className={styles.room}>
      <img alt="Avatar" className={styles.avatar} src={avatar} />
      <div className={styles.roomId}>{ellipsify(roomId)}</div>
      <div className={styles.roomInfo}>
        <div className={isOpen ? styles.playerInfo : styles.playerInfoFull}>
          <img
            alt="PlayerLogo"
            className={styles.playerLogo}
            src={playerLogo}
          />
          <div className={styles.playerCount}>
            {playerCount} / {roomSize}
          </div>
        </div>
        <button
          onClick={() => clickHandler(roomId)}
          className={styles.joinButton}
        ></button>
        <img alt="language" className={styles.switchLang} src={language} />
      </div>
    </div>
  );
};

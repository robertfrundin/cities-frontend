import styles from "./room.module.scss";
import avatarSample1 from "../../assets/hippopotamus-svgrepo-com.svg";
import playerLogo from "../../assets/userlogo.svg";
import flagIcon from "../../assets/Flag_of_Russia.svg.webp";
import { useNavigate } from "react-router-dom";

// import avatarSample2 from '../../assets/stork-svgrepo-com.svg'

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
  isOpen = true;
  roomLogo = avatarSample1;
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
      <img alt="Avatar" className={styles.avatar} src={roomLogo} />
      <div className={styles.roomId}>{roomId}</div>
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

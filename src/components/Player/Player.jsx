import avatar from "../../assets/avatars/5.svg"
import medal from "../../assets/medal.svg";
import styles from "./player.module.scss";

export const Player = ({ player}) => {

  return (
    <li className={styles.wrap}>
      <img src={avatar} alt="" className={styles.avatar} />
      <div className={styles.playerinfo}>
        <p>{player.name}</p>
        <span>{player.score}</span>
      </div>
      <img src={medal} alt="" className={styles.placeimg} />
    </li>
  );
};

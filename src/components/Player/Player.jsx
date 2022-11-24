import zebra from "../../assets/zebra.svg";
import medal from "../../assets/medal.svg";
import styles from "./player.module.scss";
export const Player = ({ name, score }) => {
  return (
    <li className={styles.wrap}>
      <img src={zebra} alt="" className={styles.avatar} />
      <div className={styles.playerinfo}>
        <p>{name}</p>
        <span>{score}</span>
      </div>
      <img src={medal} alt="" className={styles.placeimg} />
    </li>
  );
};

import zebra from "../../assets/zebra.svg";
import medal from "../../assets/medal.svg";
import styles from "./player.module.scss";
export const Player = ({ player}) => {
  // if (Player.me ){
  //   <h1>ХУЙ</h1>
  // }
  return (
    <li className={styles.wrap}>
      <img src={zebra} alt="" className={styles.avatar} />
      <div className={styles.playerinfo}>
        <p>{player.name}</p>
        <span>{player.score}</span>
      </div>
      <img src={medal} alt="" className={styles.placeimg} />
    </li>
  );
};

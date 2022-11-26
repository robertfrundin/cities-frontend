import avatar0 from "../../assets/avatars/0.svg";
import avatar1 from "../../assets/avatars/1.svg";
import avatar2 from "../../assets/avatars/2.svg";
import avatar3 from "../../assets/avatars/3.svg";
import avatar4 from "../../assets/avatars/4.svg";
import avatar5 from "../../assets/avatars/5.svg";
import { useMemo } from "react";
import styles from "./player.module.scss";
// import medal from "../../assets/medal.svg";
const images = [avatar0, avatar1, avatar2, avatar3, avatar4, avatar5];

export const Player = ({ player }) => {
  const playerImage = useMemo(() => images[Math.round(Math.random() * 5)]);
  // const imageLink = useMemo(() => setsrc('../../assets/avatars/'+ Math.floor(Math.random() * 6) + '.svg');
  return (
    <li className={styles.wrap}>
      <img src={playerImage} alt="" className={styles.avatar} />
      <div className={styles.playerinfo}>
        <p>{player.name}</p>
        <span>{player.score}</span>
      </div>
      {/* <img src={medal} alt="" className={styles.placeimg} /> */}
    </li>
  );
};

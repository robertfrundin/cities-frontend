import avatar0 from "../../assets/avatars/0.svg";
import avatar1 from "../../assets/avatars/1.svg";
import avatar2 from "../../assets/avatars/2.svg";
import avatar3 from "../../assets/avatars/3.svg";
import avatar4 from "../../assets/avatars/4.svg";
import avatar5 from "../../assets/avatars/5.svg";
import { useMemo, useState } from "react";
import styles from "./player.module.scss";
export const Player = ({ player }) => {
  const images = [avatar0, avatar1, avatar2, avatar3, avatar4, avatar5];
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

  const [src, setSrc] = useState(images[Math.abs(getHash(player.id) % 6)]);

  return (
    <li className={styles.wrap}>
      <img src={src} alt="" className={styles.avatar} />
      <div className={styles.playerinfo}>
        <p>{player.name}</p>
        <span>{player.score}</span>
      </div>
      {/*<img src={medal} alt="" className={styles.placeimg} />*/}
    </li>
  );
};

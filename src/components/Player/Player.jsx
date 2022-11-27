import { useMemo, useState } from "react";
import styles from "./player.module.scss";
export const Player = ({ player }) => {
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

  const [src, setSrc] = useState(
    require(`../../assets/avatars/${[Math.abs(getHash(player.id) % 25)]}.svg`)
  );
  console.log(src);
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

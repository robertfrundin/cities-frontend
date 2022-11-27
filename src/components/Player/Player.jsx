import avatar0 from "../../assets/avatars/0.svg";
import avatar1 from "../../assets/avatars/1.svg";
import avatar2 from "../../assets/avatars/2.svg";
import avatar3 from "../../assets/avatars/3.svg";
import avatar4 from "../../assets/avatars/4.svg";
import avatar5 from "../../assets/avatars/5.svg";
import avatar6 from "../../assets/avatars/6.svg";
import avatar7 from "../../assets/avatars/7.svg";
import avatar8 from "../../assets/avatars/8.svg";
import avatar9 from "../../assets/avatars/9.svg";
import avatar10 from "../../assets/avatars/10.svg";
import avatar11 from "../../assets/avatars/11.svg";
import avatar12 from "../../assets/avatars/12.svg";
import avatar13 from "../../assets/avatars/13.svg";
import avatar14 from "../../assets/avatars/14.svg";
import avatar15 from "../../assets/avatars/15.svg";
import avatar16 from "../../assets/avatars/16.svg";
import avatar17 from "../../assets/avatars/17.svg";
import avatar18 from "../../assets/avatars/18.svg";
import avatar19 from "../../assets/avatars/19.svg";
import avatar20 from "../../assets/avatars/20.svg";
import avatar21 from "../../assets/avatars/21.svg";
import avatar22 from "../../assets/avatars/22.svg";
import avatar23 from "../../assets/avatars/23.svg";
import avatar24 from "../../assets/avatars/24.svg";
import avatar25 from "../../assets/avatars/25.svg";

import { useMemo, useState } from "react";
import styles from "./player.module.scss";
export const Player = ({ player }) => {
  const images = [avatar0, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11, avatar12, avatar13, avatar14, avatar15, avatar16, avatar17, avatar18, avatar19, avatar20, avatar21, avatar22, avatar23, avatar24, avatar25];
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

  const [src, setSrc] = useState(images[Math.abs(getHash(player.id) % 25)]);

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

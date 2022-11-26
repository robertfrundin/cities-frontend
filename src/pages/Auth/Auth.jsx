import { Button } from "../../components/Button/Button";
import { ChangeLang } from "../../components/ChangeLang/ChangeLang";
import ava0 from "../../assets/avatars/0.svg" ;
import styles from "./auth.module.scss";

import getAuthToken from "../../grpc-services/token-service/service";
import getRandomRoom from "../../grpc-services/random-joiner-service/service";
import getNickName from "../../grpc-services/nickname-service/service";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Auth = () => {
  

  const [nickName, setNickName] = useState(Cookies.get("userName"));
  useEffect(() => {
    if (Cookies.get("authToken") === undefined) {
      getAuthToken().then((nick) => {
        console.log(nick + " nick in getAuthToken");
        setNickName(nick);
      });
    } else {
      getNickName()
        .then((nick) => setNickName(nick))
        .catch((err) => {
          console.log(err);
          getAuthToken().then((nick) => {
            console.log(nick + " nick");
            setNickName(nick);
          });
        });
    }
  });
  const navigate = useNavigate();
  const openRoomsList = () => {
    navigate("rooms");
  };

  async function joinRandomRoom() {
    const roomId = await getRandomRoom();
    navigate(`game/${roomId}`);
  }

  return (
    <>
      <div className={styles.wrap + " animated"}>
        <main className={styles.content}>
          <div className={styles.selectLogin}>
            <button className={styles.guest}> ГОСТЬ </button>
            <button className={styles.login}> ВОЙТИ </button>
          </div>

          <div className={styles.guestform}>
            <div className={styles.username}>Привет, {nickName}!</div>
            <img alt="Avatar" className={styles.avatar} src={ava0} />
          </div>
          {/* <div className={styles.loginform}>
                <input className = {styles.input}></input>
                <input className = {styles.input}></input>
            </div> */}

          <div className={styles.authBlock}>
            <Button
              handlerClick={joinRandomRoom}
              text={"ИГРАТЬ"}
              type="play"
              size="medium"
              className={styles.button}
            >
              {" "}
            </Button>

            <ChangeLang className={styles.changeLang} />
            <Button
              handlerClick={openRoomsList}
              text={"КОМНАТЫ"}
              type="rooms"
              size="medium"
              className={styles.button}
            ></Button>

            {/* <div className = {styles.scrollingImage}></div> */}
          </div>
        </main>
      </div>
    </>
  );
};

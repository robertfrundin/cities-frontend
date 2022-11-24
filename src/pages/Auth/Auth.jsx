import { Button } from "../../components/Button/Button";
import { ChangeLang } from "../../components/ChangeLang/ChangeLang";
import AuthPhoto from "../../assets/hippopotamus-svgrepo-com.svg";
import styles from "./auth.module.scss";
import { Link } from "react-router-dom";
import getUserData from "../../grpc-services/user-service/service";
import getRandomRoom from "../../grpc-services/random-joiner-service/service";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  useEffect(getUserData);
  const navigate = useNavigate();
  const openRoomsList = () => {
    navigate("rooms");
  };
  const user = { name: "oleg" };

  async function joinRandomRoom() {
    const roomId = await getRandomRoom();
    navigate(`game/${roomId}`);
  }
  return (
    <>
      <div className={styles.wrap}>
        <main className={styles.content}>
          <div className={styles.selectLogin}>
            <button className={styles.guest}> ГОСТЬ </button>
            <button className={styles.login}> ВОЙТИ </button>
          </div>
          <div className={styles.username}>Привет, {user.name}!</div>
          <img alt="Avatar" className={styles.avatar} src={AuthPhoto} />
          {/*<input className = {styles.input}></input>*/}
          <div className={styles.authBlock}>
            <Button
              handlerClick={joinRandomRoom}
              text={"ИГРАТЬ"}
              type="play"
              size="medium"
            >
              {" "}
            </Button>
            <ChangeLang />
            <Button
              handlerClick={openRoomsList}
              text={"КОМНАТЫ"}
              type="rooms"
              size="medium"
            ></Button>
          </div>
          {/* <div className = {styles.scrollingImage}></div> */}
        </main>
      </div>
    </>
  );
};

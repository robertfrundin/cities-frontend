import { Button } from "../../components/Button/Button";
import { ChangeLang } from "../../components/ChangeLang/ChangeLang";
import AuthPhoto from "../../assets/hippopotamus-svgrepo-com.svg";
import styles from "./auth.module.scss";
import { Link } from "react-router-dom";
import getUserData from "../../grpc-services/user-service/service";
import getRandomRoom from "../../grpc-services/random-joiner-service/service";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export const Auth = () => {
  const [nickName, setNickName] = useState();
  useEffect(() => {
    getUserData();
    setNickName(Cookies.get("userName"));
  });
  const navigate = useNavigate();
  const openRoomsList = () => {
    navigate("rooms");
  };

  async function joinRandomRoom() {
    const roomId = await getRandomRoom();
    navigate(`game/${roomId}`);
  }
  async function toRoomsList() {
    navigate(`/rooms`);
  }
  return (
    <>
      <div className={styles.wrap}>
        <main className={styles.content}>
          <div className={styles.selectLogin}>
            <button className={styles.guest}> ГОСТЬ </button>
            <button className={styles.login}> ВОЙТИ </button>
          </div>
          <div className={styles.username}>Привет, {nickName}!</div>
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

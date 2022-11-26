import styles from "./rooms.module.scss";
import roomstyles from "../../components/Room/room.module.scss";
import roomLogo from "../../assets/avatars/3.svg";
import { Room } from "../../components/Room/Room";
import getRoomList from "../../grpc-services/room-list-service/service";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import getRandomRoom from "../../grpc-services/random-joiner-service/service";
import { useNavigate } from "react-router-dom";



export const Rooms = ({ className, handlerClick, roomsCount }) => {
  const [roomList, setRoomlist] = useState([]);
  useEffect(() => {
    getRoomList().then((x) => setRoomlist(x));
  }, []);
  const navigate = useNavigate();
  async function joinRandomRoom() {
    const roomId = await getRandomRoom();
    navigate(`/game/${roomId}`);
  }
  return (
    <div className={styles.roomsList + " animated"}>
      <div className={roomstyles.room}>
        <img alt="Avatar" className={roomstyles.avatar} src={roomLogo} />
        <div className={roomstyles.roomId}>Cоздать игру</div>
        <Button
         className={roomstyles.joinButton}
          handlerClick={joinRandomRoom}>
        </Button>
      </div>
      {roomList.map((x) => (
        <Room
          playerCount={x.taken}
          roomSize={x.limit}
          roomId={x.id}
          key={x.id}
        ></Room>
      ))}
    </div>
  );
};

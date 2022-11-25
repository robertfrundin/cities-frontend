import styles from "./rooms.module.scss";
import roomstyles from "../../components/Room/room.module.scss";
import roomLogo from "../../assets/hippopotamus-svgrepo-com.svg";
import { Room } from "../../components/Room/Room";
import getRoomList from "../../grpc-services/room-list-service/service";
import { useEffect, useState } from "react";
export const Rooms = ({ className, handlerClick, roomsCount }) => {
  const [roomList, setRoomlist] = useState([]);
  useEffect(() => {
    getRoomList().then((x) => setRoomlist(x));
  }, []);

  return (
    <div className={styles.roomsList}>
      <div className={roomstyles.room}>
        <img alt="Avatar" className={roomstyles.avatar} src={roomLogo} />
        <div className={roomstyles.roomId}>Cоздать игру</div>
        <button className={roomstyles.joinButton}></button>
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

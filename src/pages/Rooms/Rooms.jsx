import styles from './rooms.module.scss'
import roomstyles from '../../components/Room/room.module.scss'
import roomLogo from '../../assets/hippopotamus-svgrepo-com.svg'
import { Room } from '../../components/Room/Room'


export const Rooms = ({
  className,
  handlerClick,
  roomsCount
}) => {
  return (
    
      <div className={styles.roomsList}>
        <div className={roomstyles.room}>
          <img alt="Avatar" className = {roomstyles.avatar} src={roomLogo}/>
          <div className={roomstyles.roomId}>Cоздать игру</div>
          <button className={roomstyles.joinButton}></button>
        </div>
        <Room playerCount={12} roomSize= {13} roomId = {`#2ad932`}/>
        <Room playerCount={2} roomSize= {3} roomId = {`#2ad932`}/>
        <Room playerCount={8} roomSize= {9} roomId = {`#2ad932`}/>

        <Room playerCount={5} roomSize= {5} roomId = {`#2ad932`}/>
        <Room playerCount={6} roomSize= {6} roomId = {`#2ad932`}/>
        <Room playerCount={8} roomSize= {9} roomId = {`#2ad932`}/>
        <Room playerCount={12} roomSize= {12} roomId = {`#2ad932`}/>
      
      </div>
  
  )
}
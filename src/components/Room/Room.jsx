import styles from './room.module.scss'
import avatarSample1 from '../../assets/hippopotamus-svgrepo-com.svg'
import playerLogo from '../../assets/users.svg'
import flagIcon from '../../assets/Flag_of_Russia.svg.webp'

// import avatarSample2 from '../../assets/stork-svgrepo-com.svg'

export const Room = ({ type, className, roomId, roomLogo, playerCount, roomSize, language, isOpen }) => {
  isOpen = true
  roomLogo = avatarSample1
  language = flagIcon

  if (playerCount === roomSize) {
    isOpen = false
  }
  return (
    <div className={styles.room}>
      <img alt="Avatar" className={styles.avatar} src={roomLogo} />
      <div className={styles.roomId}>{roomId}</div>
      <div className={styles.roomInfo}>
        <div className={isOpen ? styles.playerInfo : styles.playerInfoFull}>
          <img alt="PlayerLogo" className={styles.playerLogo} src={playerLogo} />
          <div className={styles.playerCount}>
            {playerCount} / {roomSize}
          </div>
        </div>
        <button className={styles.joinButton}></button>
        <img alt="language" className={styles.switchLang} src={language} />
      </div>
    </div>
  )
}

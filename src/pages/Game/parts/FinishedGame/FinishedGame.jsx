import styles from './finishedGame.module.scss'
import zebra from '../../../../assets/zebra.svg'
import randombutton from '../../../../assets/randomroomicon.svg'
import roomslist from '../../../../assets/roomsicon.svg'
import restartbutton from '../../../../assets/restart2.svg'


export const FinishedGame = () => {
  return (
    <div className={styles.game__finished}>
      <div className={styles.finish__result}>
        <h3>ИГРА ОКОНЧЕНА</h3>
        <img className={styles.winner__image} src={zebra} alt="" />
        <div className={styles.winner__info}>
          <h3>ПОБЕДИТЕЛЬ:</h3>
          <h3>don_nagibon_2012</h3>
        </div>
      </div>
      <div className={styles.finish__buttons}>
        <button className={styles.randomgame}>
          <img alt = 'random' src={randombutton}/>
          <p>Случайная игра</p>
        </button>
        <button className={styles.restart}>
          <img alt = 'restart' src={restartbutton}/>
          <p>Начать заново</p>
        </button>
        <button className={styles.roomlist}>
          <img alt = 'roomsllist' src={roomslist}/>
          <p>Cписок комнат</p>     
        </button>
      </div>
    </div>
  )
}

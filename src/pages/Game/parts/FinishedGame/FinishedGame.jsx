import styles from './finishedGame.module.scss'
import zebra from '../../../../assets/zebra.svg'

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
        <button>Случайная игра</button>
        <button className={styles.restart}>R</button>
        <button>В список комнат</button>
      </div>
    </div>
  )
}

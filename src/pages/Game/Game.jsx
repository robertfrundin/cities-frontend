import styles from './game.module.scss'
import copyImage from '../../assets/copy.svg'
import { Player } from '../../components/Player/Player'
export const Game = () => {
  return (
    <div className={styles.wrap}>
      <main className={styles.content}>
        <div className={styles.players}>
          <ul>
            <Player></Player>
            <Player></Player>
            <Player></Player>
            <Player></Player>
          </ul>
        </div>
        <div className={styles.board}>
          <h2>Текущее слово:</h2>
          <h1>
            Москв<span className={styles.red__letter}>а</span>
          </h1>
          <input defaultValue="A" type="text" />
          <button>Отправить</button>
          <span className={styles.copy}>
            <img src={copyImage} alt="" />
            <span>#8fdad7</span>
          </span>
        </div>
        <button className={styles.close}></button>
      </main>
    </div>
  )
}

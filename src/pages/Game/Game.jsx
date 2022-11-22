import styles from './game.module.scss'
import { Player } from '../../components/Player/Player'
import { ActiveGame } from './parts/ActiveGame/ActiveGame'
import { FinishedGame } from './parts/FinishedGame/FinishedGame'
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
          {/* <ActiveGame/> */}
          <FinishedGame/>
        </div>
      </main>
     </div>
  )
}

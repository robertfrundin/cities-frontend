import styles from './startedGame.module.scss'

export const StartedGame = () => {
  return (
    <div className={styles.game__started}>
      <h3>Ожидание других игроков</h3>
      <div className={styles.clockLoader}></div>
    </div>
  )
}

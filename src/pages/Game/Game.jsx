import styles from './game.module.scss'
export const Game = () => {
  return (
    <div className={styles.wrap}>
      <main className={styles.content}>
        <div className={styles.players}></div>
        <div className={styles.board}>
          <h2>Текущее слово:</h2>
          <h1>
            Москв<span className={styles.red__letter}>а</span>
          </h1>
          <input defaultValue="A" type="text" />
          <button>Отправить</button>
        </div>
      </main>
    </div>
  )
}

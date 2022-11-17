import styles from './search.module.scss'
export const Search = () => {
  return (
  <div className={styles.game__loading}>
      <div className={styles.ldsring}><div></div><div></div><div></div><div></div></div>
      <h3>Игра загружается</h3>
  </div>
  )
}

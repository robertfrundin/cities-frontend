import zebra from '../../assets/zebra.svg'
import medal from '../../assets/medal.svg'
import styles from './player.module.scss'
export const Player = () => {
  return (
    <li className={styles.wrap}>
      <img src={zebra} alt="" />
      <div>
        <p>don_nagibon_2012</p>
        <span>320</span>
      </div>
      <img src={medal} alt="" />
    </li>
  )
}

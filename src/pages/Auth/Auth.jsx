import { Button } from "../../components/Button/Button"
import { ChangeLang } from "../../components/ChangeLang/ChangeLang"
import AuthPhoto from '../../assets/hippopotamus-svgrepo-com.svg'
import styles from './auth.module.scss'
export const Auth = () => {
  return (
    <>
    <div className={styles.wrap}>
      <main className={styles.content}>
        <div className ={styles.selectLogin} >
          <button className = {styles.guest}> ГОСТЬ </button>
          <button className = {styles.login}> ВОЙТИ </button>
        </div>
        <img alt="Avatar" width="260" height="260" class="avatar avatar-user width-full border color-bg-default" src={AuthPhoto}/>
        <input className = {styles.input}></input>
        <div className={styles.authBlock}>
          <Button text = {'ИГРАТЬ'} type = 'play' size = 'medium'> </Button> 
          <ChangeLang/>
          <Button text = {'КОМНАТЫ'} type = 'rooms' size = 'medium'></Button> 
        </div>
        
      </main>
    </div>
    
    
    </>
  )
}

import { Button } from "../../components/Button/Button"
import { ChangeLang } from "../../components/ChangeLang/ChangeLang"
import AuthPhoto from '../../assets/hippopotamus-svgrepo-com.svg'
import styles from './auth.module.scss'

import getUserData from "../../grpc-services/user-service/service";

export const Auth = () => {
  const user={name:'oleg'}
  return (
    <>
    <div className={styles.wrap}>
      <main className={styles.content}>
        <div className ={styles.selectLogin} >
          <button  className = {styles.guest}> ГОСТЬ </button>
          <button onClick={getUserData.bind(user)} className = {styles.login}> ВОЙТИ </button>
        </div>
        <img alt="Avatar"className = {styles.avatar} src={AuthPhoto}/>
        {/*<input className = {styles.input}></input>*/}
        <div className={styles.authBlock}>
          <Button text = {'ИГРАТЬ'} type = 'play' size = 'medium'> </Button> 
          <ChangeLang/>
          <Button text = {'КОМНАТЫ'} type = 'rooms' size = 'medium'></Button> 
        </div>   
        {/* <div className = {styles.scrollingImage}></div> */}
      </main>
    </div>
    
    
    </>
  )
}
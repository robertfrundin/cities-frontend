import React from 'react'
import styles from './activeGame.module.scss'
import copyImage from '../../../../assets/copy.svg'
import Progressbar from '../../../../components/Progressbar/Progressbar'

export const ActiveGame = () => {


  return (
    <div className={styles.active__game}>
      <h2>Текущее слово:</h2>
      <h1>
        Москв<span className={styles.red__letter}>а</span>
      </h1>
      <input defaultValue="A" type="text" />
      <Progressbar/>
      <span className={styles.copy}>
        <img src={copyImage} alt="" />
        <span>#8fdad7</span>
      </span>
      <button className={styles.close}></button>
      
      
    </div>
  )
}

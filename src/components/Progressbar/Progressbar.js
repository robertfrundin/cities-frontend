import React, {useState, useEffect} from 'react'
import styles from './progressbar.module.css'

export default function Progressbar() {
    const [filled, setFilled] = useState(15000);
	const [isRunning, setIsRunning] = useState(false);
	useEffect(() => {
        setIsRunning(true)
		if (filled > 0 && isRunning) {
			setTimeout(() => setFilled(prev => prev -= 1000), 1000)
		}
	},[filled, isRunning])
  return (
	  <button className={styles.btn} onClick={() => {setIsRunning(false)}}>
		  <div className={styles.progressbar}>
			  <div className = {styles.progressColor} style={{
				  height: "100%",
				  width: `${Math.round(filled * 0.006666667)}%`,
				  transition:"width 1s linear"
			  }}></div>
			  <span className={styles.progressPercent}> ОТПРАВИТЬ {filled / 1000 } </span>
		  </div>
	</button>
  )
}
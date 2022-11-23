import styles from './changelang.module.css'
import classnames from "classnames";
import flagIcon from '../../assets/Flag_of_Russia.svg.webp'

export const ChangeLang= ({ 
  language,
  className,
  handlerClick
}) => {
  return (
    <input 
      type= 'image' 
      alt = 'flag'
      src = {flagIcon}
      className={classnames(
        styles.input,
        className
      )}
      onClick={handlerClick}
    />

  )
}

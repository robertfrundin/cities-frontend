import styles from './style.module.css'
import classnames from "classnames";


export const Button = ({ 
  type,
  text, 
  size,
  icon,
  className,
  handlerClick
}) => {

  // let handlerClick = () => {}
  // switch (type) {
  //   case 'startRandomGame': {

  //     handlerClick = () => {
        
  //     }
  //     break
  //   };

  //   case 'goToLobby': {
  //     handlerClick = () => {
        
  //     }
  //     break
  //   };

  // }

  return (
    <button
      className={classnames(
        styles.button,
        styles[`button_size_${size}`],
        className
      )}
      onClick={handlerClick}
    >
      <span
        className={classnames(
          styles[`button__text`],
          styles[`button__text_icon_${icon}`]
        )}
        >
          {text}
      </span>
    </button>
  );
}

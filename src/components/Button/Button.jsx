import styles from './button.module.css'
import classnames from "classnames";


export const Button = ({ 
  type,
  text, 
  size,
  icon,
  className,
  handlerClick
}) => {

  return (
    <button
      className={classnames(
        styles.button,
        styles[`button_size_${size}`],
        styles[`button_type_${type}`],
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

import { Button } from "../../components/Button/Button";
import styles from "./Page404.module.scss";
import logo404 from "../../assets/404.svg"
import { useNavigate } from "react-router-dom";

export const Page404 = () => {
	const navigate = useNavigate();
	function toAuth() {
		navigate(`/auth`);
	  }

    return (
		<div className={styles.wrap}>
			<div className={styles.content}>
				<img alt = '404' className={styles.avatar} src = {logo404}/>
				<p className = {styles.description}>Страница не найдена</p>
				<Button
					className={styles.homebutton} 
					handlerClick={toAuth}
					size="medium"
					text={"Перейти на главную"}
					>
					{" "}
				</Button>
			</div>
		</div>
    )
}
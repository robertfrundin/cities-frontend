import styles from "./startedGame.module.scss";
// import zebra from '../../../../assets/zebra.svg'
// import randombutton from '../../../../assets/randomroomicon.svg'
// import roomslist from '../../../../assets/roomsicon.svg'
// import restartbutton from '../../../../assets/restart2.svg'

export const StartedGame = () => {
  return (
    <div className={styles.game__started}>
      <h3>Ожидание </h3>
      <div className={styles.clockLoader}></div>
    </div>
  );
};

import winnerImage from "../../assets/YOU-WIN.svg";
import styles from "./WinnerPlayer.module.css";

const WinnerPlayer = () => {
  return (
    <div className={styles.winner}>
      <img src={winnerImage} alt="Você ganhou" />
      <button className={styles.playAgain}></button>
    </div>
  );
};

export default WinnerPlayer;

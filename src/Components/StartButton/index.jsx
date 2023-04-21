import styles from "./styles.module.css";
import startButton from "../../assets/start.svg";

const StartButton = () => {
  return (
    <button className={styles.startButton}>
      <img src={startButton} alt="imagem de start" />
    </button>
  );
};

export default StartButton;

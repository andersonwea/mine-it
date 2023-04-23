import { useNavigate } from "react-router-dom";
import winnerImage from "../../assets/YOU-WIN.svg";
import styles from "./WinnerPlayer.module.css";

const WinnerPlayer = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/play");
  }

  return (
    <div className={styles.winner}>
      <img src={winnerImage} alt="Você ganhou" />
      <button onClick={handleClick} className={styles.playAgain}></button>
    </div>
  );
};

export default WinnerPlayer;

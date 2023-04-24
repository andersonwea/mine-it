import React from "react";
import { useNavigate } from "react-router-dom";
import loserImage from "../../assets/GAME-OVER.svg";
import winnerImage from "../../assets/YOU-WIN.svg";
import playAgainButton from "../../assets/play-again.png";
import tryAgainButton from "../../assets/try-again.png";
import styles from "./styles.module.css";
import { UserContext } from "../../storage/UserContext";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const GameOver = () => {
  const { width, height } = useWindowSize();
  const {
    setIsBomb,
    setIsDiamond,
    setIsWinnerPlayer,
    setIsLoserPlayer,
    isWinnerPlayer,
  } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleClick() {
    setIsBomb(false);
    setIsDiamond(0);
    setIsLoserPlayer(false);
    setIsWinnerPlayer(false);
    navigate("/play");
  }

  return (
    <div className={styles.gameOver}>
      {isWinnerPlayer ? (
        <>
          <Confetti width={width} height={height} tweenDuration={2000} />
          <img
            className={styles.gameOverImage}
            src={winnerImage}
            alt="Você ganhou"
          />
          <button onClick={handleClick} className={`${styles.playAgain}`}>
            <img src={playAgainButton} alt="jogue de novo" />
          </button>
        </>
      ) : (
        <>
          <img
            className={styles.gameOverImage}
            src={loserImage}
            alt="Você perdeu"
          />
          <button onClick={handleClick} className={`${styles.playAgain}`}>
            <img src={tryAgainButton} alt="tente de novo" />
          </button>
        </>
      )}
    </div>
  );
};

export default GameOver;

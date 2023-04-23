import React from "react";
import { useNavigate } from "react-router-dom";
import loserImage from "../../assets/GAME-OVER.svg";
import winnerImage from "../../assets/YOU-WIN.svg";
import styles from "./styles.module.css";
import { UserContext } from "../../storage/UserContext";

const GameOver = () => {
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
    <div>
      {isWinnerPlayer ? (
        <>
          <img src={winnerImage} alt="Você ganhou" />
          <button
            onClick={handleClick}
            className={`${styles.playAgain} ${styles.winner}`}
          />
        </>
      ) : (
        <>
          <img src={loserImage} alt="Você perdeu" />
          <button
            onClick={handleClick}
            className={`${styles.playAgain} ${styles.loser}`}
          ></button>
        </>
      )}
    </div>
  );
};

export default GameOver;

import styles from "./styles.module.css";
import CardBoard from "../CardBoard";
import Logo from "../../Components/Logo/index";
import Coins from "../Coins";
import CoinBag from "../CoinBag";
import StartButton from "../StartButton";

const BoardGame = () => {
  return (
    <div className={styles.boardGame}>
      <CardBoard />
      <Logo />
      <Coins />
      <CoinBag />
      <StartButton />
    </div>
  );
};

export default BoardGame;

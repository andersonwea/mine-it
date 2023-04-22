import styles from "./styles.module.css";
import CardBoard from "../CardBoard";
import Logo from "../../Components/Logo/index";
import Coins from "../Coins";
import CoinBag from "../CoinBag";

const BoardGame = () => {
  return (
    <div className={styles.boardGame}>
      <CardBoard />
      <Logo />
      <Coins />
      <CoinBag />
    </div>
  );
};

export default BoardGame;

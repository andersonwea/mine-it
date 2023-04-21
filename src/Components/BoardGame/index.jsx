import styles from "./styles.module.css";
import CardBoard from "../CardBoard";
import Logo from "../../Components/Logo/index";

const BoardGame = () => {
  return (
    <div className={styles.boardGame}>
      <CardBoard />
      <Logo />
    </div>
  );
};

export default BoardGame;

import cardBoard from "../../assets/card-board.svg";
import styles from "./styles.module.css";

const CardBoard = () => {
  return (
    <div className={styles.cardBoard}>
      <img src={cardBoard} alt="imagem do card" />;
    </div>
  );
};

export default CardBoard;

import CardItem from "./CardItem";
import styles from "./styles.module.css";

const CardBoard = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className={styles.cardBoard}>
      {cards.map((card) => (
        <CardItem key={card} />
      ))}
    </div>
  );
};

export default CardBoard;

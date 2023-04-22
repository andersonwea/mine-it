import CardItem from "./CardItem";
import styles from "./styles.module.css";

const CardBoard = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const randomCards = takeRandomCard(cards);

  function takeRandomNumber(InitialNumber, finalNumber) {
    return Math.floor(Math.random() * finalNumber) + InitialNumber;
  }

  function takeRandomCard(cards) {
    const takeRandomBombPosition = takeRandomNumber(1, 10);
    return cards.map((card) => {
      const takeRandomCardItem = takeRandomNumber(0, 4);
      return {
        itemCard: takeRandomCardItem,
        diamond: takeRandomNumber(0, 3),
        bomb: card === takeRandomBombPosition,
      };
    });
  }
  return (
    <div className={styles.cardBoard}>
      {randomCards.map((card, index) => (
        <CardItem key={index} cardData={card} />
      ))}
    </div>
  );
};

export default CardBoard;

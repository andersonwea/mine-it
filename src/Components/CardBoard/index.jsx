import React from "react";
import { UserContext } from "../../storage/UserContext";
import CardItem from "./CardItem";
import styles from "./styles.module.css";
import StartButton from "../StartButton";

const CardBoard = () => {
  const { isPlaying, setIsPlaying } = React.useContext(UserContext);

  function takeRandomNumber(InitialNumber, finalNumber) {
    return Math.floor(Math.random() * finalNumber) + InitialNumber;
  }

  const takeRandomCard = React.useMemo(() => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const takeRandomBombPosition = takeRandomNumber(1, 9);
    return cards.map((card) => {
      const takeRandomCardItem = takeRandomNumber(0, 4);
      console.log(takeRandomBombPosition);
      return {
        itemCard: takeRandomCardItem,
        diamond: takeRandomNumber(0, 3),
        bomb: card === takeRandomBombPosition,
      };
    });
  }, []);

  const randomCards = takeRandomCard;
  console.log(randomCards);
  return (
    <div className={styles.cardBoard}>
      {isPlaying &&
        randomCards.map((card, index) => {
          return (
            <CardItem
              open={open}
              key={index}
              cardData={card}
              styleAnimation={{ animationDelay: `${index * 250}ms` }}
            />
          );
        })}
      <StartButton setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
    </div>
  );
};

export default CardBoard;

import React from "react";
import styles from "./styles.module.css";
import cardItemFrontImage1 from "../../../assets/table-item1.svg";
import cardItemFrontImage2 from "../../../assets/table-item2.svg";
import cardItemFrontImage3 from "../../../assets/table-item3.svg";
import cardItemFrontImage4 from "../../../assets/table-item4.svg";

const cardItemArray = [
  cardItemFrontImage1,
  cardItemFrontImage2,
  cardItemFrontImage3,
  cardItemFrontImage4,
];

const CardItem = () => {
  const [card, setCard] = React.useState(null);

  React.useEffect(() => {
    function takeRadomCard() {
      setCard(cardItemArray[Math.floor(Math.random() * 3)]);
      console.log(card);
    }
    takeRadomCard();
  }, [card]);

  return (
    <button className={styles.cardItem}>
      <img src={card} alt="imagem do card" />
    </button>
  );
};

export default CardItem;

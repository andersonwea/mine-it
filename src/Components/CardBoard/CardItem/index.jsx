import React from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import cardItemFrontImage1 from "../../../assets/table-item1.svg";
import cardItemFrontImage2 from "../../../assets/table-item2.svg";
import cardItemFrontImage3 from "../../../assets/table-item3.svg";
import cardItemFrontImage4 from "../../../assets/table-item4.svg";
import cardItemBackImage1 from "../../../assets/table-item-back1.svg";
import cardItemBackImage2 from "../../../assets/table-item-back2.svg";
import cardItemBackImage3 from "../../../assets/table-item-back3.svg";
import cardItemBackImage4 from "../../../assets/table-item-back4.svg";
import diamondPurpleImage from "../../../assets/diamond-purple.svg";
import diamondRedImage from "../../../assets/diamond-red.svg";
import diamondYellowImage from "../../../assets/diamond-yellow.svg";
import bombImage from "../../../assets/bomb.svg";
import { UserContext } from "../../../storage/UserContext";

const cardItemArray = [
  {
    front: cardItemFrontImage1,
    back: cardItemBackImage1,
  },
  {
    front: cardItemFrontImage2,
    back: cardItemBackImage2,
  },
  {
    front: cardItemFrontImage3,
    back: cardItemBackImage3,
  },
  {
    front: cardItemFrontImage4,
    back: cardItemBackImage4,
  },
];
const diamondItemArray = [
  diamondPurpleImage,
  diamondRedImage,
  diamondYellowImage,
];
const bombAudio = new Audio("../src/assets/sounds/mine-it-dinamite.mp3");
const diamondAudio = new Audio("../src/assets/sounds/mine-it-right.mp3");

const CardItem = (props) => {
  const [card, setCard] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const { setIsBomb, setIsDiamond } = React.useContext(UserContext);
  const ref = React.useRef(null);
  const flip = React.useRef(null);
  const { cardData } = props;
  const { itemCard, diamond, bomb } = cardData;

  React.useEffect(() => {
    function takeRadomCard() {
      setCard({
        front: cardItemArray[itemCard].front,
        back: cardItemArray[itemCard].back,
        diamond: diamondItemArray[diamond],
        bomb: bomb ? bombImage : false,
      });
    }
    takeRadomCard();
  }, [itemCard, diamond, bomb]);

  function handleClick({ currentTarget }) {
    setOpen(true);
    diamondAudio.pause();
    diamondAudio.currentTime = 0;
    currentTarget.classList.add("cardOpened");
    setTimeout(() => {
      if (ref.current.alt.includes("bomba")) {
        setIsBomb(true);
        bombAudio.play();
      } else {
        setIsDiamond((diamond) => diamond + 1);
        diamondAudio.play();
      }
    });
  }

  return (
    <div onClick={!open ? handleClick : undefined} className={styles.cardItem}>
      <button
        ref={flip}
        className={styles.back}
        style={{
          backgroundImage: `url(${card.back})`,
        }}
      >
        <img
          ref={ref}
          className={styles.cardOpenedResult}
          src={card.bomb ? card.bomb : card.diamond}
          alt={card.bomb ? "imagem de bomba" : "imagem de diamante"}
        />
      </button>
      <button
        ref={flip}
        className={styles.front}
        style={{
          backgroundImage: `url(${card.front})`,
        }}
      ></button>
    </div>
  );
};

CardItem.displayName = "CardItem";

CardItem.propTypes = {
  props: PropTypes.any,
  cardData: PropTypes.object,
};

export default CardItem;

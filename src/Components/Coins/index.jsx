import coinsImage from "../../assets/coins.svg";
import styles from "./styles.module.css";

const Coins = () => {
  return (
    <img
      className={styles.coins}
      src={coinsImage}
      alt="image de moedas de ouro"
    />
  );
};

export default Coins;

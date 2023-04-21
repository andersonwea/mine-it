import styles from "./styles.module.css";
import coinBagImage from "../../assets/coin-bag.svg";

const CoinBag = () => {
  return (
    <img
      className={styles.coinBag}
      src={coinBagImage}
      alt="imagem de um pote de ouro"
    />
  );
};

export default CoinBag;

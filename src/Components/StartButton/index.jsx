import styles from "./styles.module.css";
import startButton from "../../assets/start.png";
import PropTypes from "prop-types";

const StartButton = ({ setIsPlaying, isPlaying }) => {
  function handleClick() {
    setIsPlaying(true);
  }

  if (!isPlaying)
    return (
      <button className={styles.startButton} onClick={handleClick}>
        <img src={startButton} alt="imagem de start" />
      </button>
    );
  else return null;
};

StartButton.propTypes = {
  setIsPlaying: PropTypes.func,
  isPlaying: PropTypes.bool,
};

export default StartButton;

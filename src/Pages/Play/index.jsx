import styles from "./styles.module.css";
import leftPillar from "../../assets/left-pillar.svg";
import rightPillar from "../../assets/right-pillar.svg";
import spiderWebLeft from "../../assets/spider-web1.svg";
import spiderWebRight from "../../assets/spider-web2.svg";
import BoardGame from "../../Components/BoardGame";
import { Routes, Route } from "react-router-dom";
import GameOver from "../GameOver/index";

const Play = () => {
  return (
    <div className="bg">
      <div className="containerApp">
        <div className={styles.app}>
          <img
            className={styles.leftPillar}
            src={leftPillar}
            alt="pillar esquerdo"
          />
          <img
            className={styles.rightPillar}
            src={rightPillar}
            alt="pillar direito"
          />
          <img
            className={styles.spiderWebLeft}
            src={spiderWebLeft}
            alt="teia de aranha esquerda"
          />
          <img
            className={styles.spiderWebRight}
            src={spiderWebRight}
            alt="teia de aranha direita"
          />
          <Routes>
            <Route path="/" element={<BoardGame />} />
            <Route path="/gameover" element={<GameOver />} />
          </Routes>
        </div>
      </div>
      /
    </div>
  );
};

export default Play;

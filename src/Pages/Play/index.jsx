import styles from "./styles.module.css";
import leftPillar from "../../assets/left-pillar.svg";
import rightPillar from "../../assets/right-pillar.svg";
import spiderWebLeft from "../../assets/spider-web1.svg";
import spiderWebRight from "../../assets/spider-web2.svg";

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
        </div>
      </div>
      /
    </div>
  );
};

export default Play;

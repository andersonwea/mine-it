import styles from "./styles.module.css";
import Logo from "../../Components/Logo/index";
import { Link } from "react-router-dom";
import Play from "../Play/index";

const Start = () => {
  return (
    <section className="bg">
      <div className="containerApp">
        <div className={styles.app}>
          <button className={styles.playButton}>
            <Link to="/play" element={<Play />}>
              <Logo />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Start;

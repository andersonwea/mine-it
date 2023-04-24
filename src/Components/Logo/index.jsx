import logoImage from "../../assets/logo.svg";
import styles from "./styles.module.css";

const Logo = () => {
  return <img className={styles.logo} src={logoImage} alt="logo do mine it" />;
};

export default Logo;

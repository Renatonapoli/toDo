import styles from "./Navbar.module.css";
import LogoImagem from "../../assets/logo.svg";

export function Navbar() {
  return (
    <div className={styles.logo}>
      <img src={LogoImagem} alt="" />
    </div>
  );
}

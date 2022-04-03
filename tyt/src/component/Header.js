import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.box}>
        <ion-icon className={styles.sideMenu} name="menu-outline"></ion-icon>
        <span className={styles.logo}>tyt</span>
        <ion-icon name="search-outline"></ion-icon>
      </div>
      <Link className={styles.search} to="/search"></Link>
    </>
  );
}

export default Header;

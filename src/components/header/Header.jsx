import styles from "./Header.module.css";
import Button from "../button/Button";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="./logo.svg" alt="" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <a href="">CATALOGUE</a>
          </li>
          <li>
            <a href="">FASHION</a>
          </li>
          <li>
            <a href="">FAVORITE</a>
          </li>
          <li>
            <a href="">LIFESTYLE</a>
          </li>
        </ul>
        <Button text="SIGN UP" />
      </nav>
    </header>
  );
}

export default Header;

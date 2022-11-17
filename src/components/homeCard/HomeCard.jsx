import styles from "./HomeCard.module.css";
import Button from "../button/Button";

function HomeCard() {
  return (
    <div className={styles.homeCard}>
      <div className={styles.titleInfo}>
        <h1 className={styles.titleHome}>LET’S EXPLORE UNIQUE CLOTHES.</h1>
        <p className={styles.p}>Live for Influential and Innovative fashion!</p>
        <div style={{ display: "flex", gap: "34px" }}>
          <img src="./element.svg" alt="" />
          <Button text="Shop Now" />
        </div>
      </div>
      <div className={styles.cardImage}>
        <img src="./card-image.png" alt="" />
      </div>
    </div>
  );
}
export default HomeCard;

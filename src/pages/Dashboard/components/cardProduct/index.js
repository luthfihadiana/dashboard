import styles from "./index.module.css";
import product from "../../../../assets/img/product.png";

export default function Index(props) {
  return (
    <div
      className={`${styles.body} ${
        (props.highlight && styles.highlight) || ""
      }`}
    >
      <div className={styles.imageContainer}>
        <img className={styles.image} alt="product" src={product} />
      </div>
      <div className={styles.desc}>
        <p className={styles.name}>Jamu temulawak</p>
        <div className={styles.infoContainer}>
          <p className={styles.info}>Rp.50000</p>
          <p className={styles.info}>10 buah</p>
        </div>
      </div>
    </div>
  );
}

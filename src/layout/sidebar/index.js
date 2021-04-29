import styles from "./index.module.css";
import Dashboard from "../../assets/svg/dashboard.svg";

export default function Index() {
  return (
    <aside className={styles.container}>
      <div className={styles.item}>
        <div className={styles.barContainer}>
          <div className={styles.bar} />
          <div className={styles.bar} />
          <div className={styles.bar} />
        </div>
      </div>
      <div className={`${styles.item} ${styles.active}`}>
        <div className={styles.iconContainer}>
          <img src={Dashboard} alt="dashboard" className={styles.icon} />
        </div>
      </div>
    </aside>
  );
}

import styles from "./index.module.css";
import Help from "../../../../assets/img/Help@2x.png";

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.title}>Market Insights</h2>
      </div>
      <div className={styles.section}>
        <img src={Help} alt="help" className={styles.logo} />
        <a className={styles.link} href="/">
          Click Here for Help
        </a>
        <span className={`material-icons ${styles.icon}`}>expand_more</span>
      </div>
    </div>
  );
}

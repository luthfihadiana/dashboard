import styles from "./index.module.css";

import Navbar from "./navbar";
import Sidebar from "./sidebar";
export default function Index(props) {
  return (
    <div className={styles.container}>
      <Navbar />
      <Sidebar />
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

import styles from "./index.module.css";
import Logo from "../../assets/img/logo.jpeg";
import Profile from "../../assets/svg/profile.svg";
import Logout from "../../assets/img/logout@2x.png";

export default function Index() {
  return (
    <header className={styles.container}>
      <div className={styles.left}>
        <img src={Logo} alt="logo" className={styles.logo} />
        <span>powered by</span>
        <img src={Logo} alt="logo" className={styles.miniLogo} />
      </div>
      <div className={styles.right}>
        <div className={styles.userInfo}>
          <p>Username</p>
          <p>Company Name</p>
        </div>
        <img src={Profile} alt="profile" className={styles.userIcon} />
        <img src={Logout} alt="profile" className={styles.logoutIcon} />
      </div>
    </header>
  );
}

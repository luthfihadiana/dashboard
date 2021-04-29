import { useState } from "react";
import moment from "moment";

import styles from "./index.module.css";
import Help from "./components/help";
import Calendar from "../../assets/img/calendar@2x.png";
import Sales from "../../assets/svg/sales.svg";
import CardProduct from "./components/cardProduct";
import Filter from "./components/filter";
import Chart from "./components/chart";

export default function Index() {
  const [showFilter, setShowFilter] = useState(false);
  const [startDate, setStartDate] = useState(Date.now() - 7 * 24 * 3600 * 1000);
  const [endDate, setEndDate] = useState(Date.now() - 24 * 3600 * 1000);
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>Dashboard</h1>
        <div className={styles.period} onClick={() => setShowFilter(true)}>
          <img src={Calendar} alt="calendar" className={styles.periodIcon} />
          <p>Period</p>
          <div className={styles.periodDate}>
            <p>{moment(startDate).format("D MMM YYYY")}</p>
            <span> - </span>
            <p>{moment(endDate).format("D MMM YYYY")}</p>
            <span className={`material-icons ${styles.icon}`}>expand_more</span>
          </div>
        </div>
      </div>
      <Help />
      <div className={styles.salesTurnOver}>
        <div className={styles.header}>
          <h2 className={styles.salesTurnOverTitle}>Sales Turnover</h2>
          <span className={`material-icons ${styles.headerIcon}`}>
            more_vert
          </span>
        </div>
        <div className={styles.salesTurnOverContent}>
          <div className={styles.salesTurnOverPriceContainer}>
            <p className={styles.salesTurnOverPrice}>Rp 3,600,000</p>
            <p className={styles.salesTurnOverSummary}>
              <span
                className={`material-icons ${styles.salesTurnOverIcon} ${styles.danger}`}
              >
                south
              </span>
              <span
                className={`${styles.salesTurnOverPercentage} ${styles.danger}`}
              >
                18%
              </span>
              last period in products sold
            </p>
          </div>
          <div className={styles.salesTurnOverIllustration}>
            <img src={Sales} alt="sales" />
          </div>
        </div>
      </div>
      <div className={styles.statistic}>
        <div className={styles.statisticSection}>
          <div className={styles.header}>
            <h2 className={styles.statisticTitle}>Sales Turnover</h2>
            <span className={`material-icons ${styles.headerIcon}`}>
              more_vert
            </span>
          </div>
          <div>
            <Chart />
          </div>
        </div>
        <div className={styles.statisticSection}>
          <div className={styles.header}>
            <h2 className={styles.statisticTitle}>Best selling SKU</h2>
            <span className={`material-icons ${styles.headerIcon}`}>
              more_vert
            </span>
          </div>
          <div className={styles.productList}>
            <CardProduct highlight />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
        <div className={styles.statisticSection}>
          <div className={styles.header}>
            <h2 className={styles.statisticTitle}>Top competitor SKU</h2>
            <span className={`material-icons ${styles.headerIcon}`}>
              more_vert
            </span>
          </div>
          <div className={styles.productList}>
            <CardProduct highlight />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
      </div>
      {(showFilter && (
        <Filter
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          close={() => setShowFilter(false)}
        />
      )) ||
        ""}
    </section>
  );
}

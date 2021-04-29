import { useState } from "react";
import styles from "./index.module.css";
import CalendarImage from "../../../../assets/img/calendar@2x.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Index(props) {
  const [valueStart, setValueStart] = useState(new Date(props.startDate));
  const [valueEnd, setValueEnd] = useState(new Date(props.endDate));
  const applyFilter = () => {
    props.setStartDate(valueStart.getTime());
    props.setEndDate(valueEnd.getTime());
    props.close();
  };
  return (
    <div className={styles.backdrop}>
      <div className={styles.body}>
        <div className={styles.header}>
          <div className={styles.headerPeriod}>
            <img
              src={CalendarImage}
              alt="calendar"
              className={styles.periodIcon}
            />
            <h2>Period</h2>
          </div>
          <span
            className={`material-icons ${styles.headerIcon}`}
            onClick={props.close}
          >
            clear
          </span>
        </div>
        <div className={styles.content}>
          <div className={styles.buttonFilterContainer}>
            <div className={styles.buttonFilter}>
              <p>Today</p>
            </div>
            <div className={styles.buttonFilter}>
              <p>Yesterday</p>
            </div>
            <div className={styles.buttonFilter}>
              <p>Last 7 Days</p>
            </div>
            <div className={styles.buttonFilter}>
              <p>Last 30 Days</p>
            </div>
            <div className={styles.buttonFilter}>
              <p>This Month</p>
            </div>
            <div className={styles.buttonFilter}>
              <p>Custom</p>
            </div>
            <button className={styles.buttonApply} onClick={applyFilter}>
              Apply
            </button>
          </div>
          <div className={styles.calendar}>
            <Calendar
              value={valueStart}
              onChange={setValueStart}
              maxDate={new Date(valueEnd.getTime() - 24 * 3600 * 1000)}
            />
            <Calendar
              value={valueEnd}
              onChange={setValueEnd}
              maxDate={new Date(Date.now() - 24 * 3600 * 1000)}
              minDate={new Date(valueStart.getTime() + 24 * 3600 * 1000)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

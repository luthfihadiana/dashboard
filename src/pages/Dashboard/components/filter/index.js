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
  const checkRange = () => {
    if (valueEnd.getTime() - (Date.now() - 24 * 3600 * 1000) <= 0) {
      let remainingTime = valueEnd.getTime() - valueStart.getTime();
      if (remainingTime <= 24 * 3600 * 1000) {
        return "today";
      }
      if (
        remainingTime <= 7 * 24 * 3600 * 1000 &&
        remainingTime >= 6 * 24 * 3600 * 1000
      ) {
        return "last-7";
      }
      if (
        remainingTime <= 30 * 24 * 3600 * 1000 &&
        remainingTime >= 29 * 24 * 3600 * 1000
      ) {
        return "last-30";
      }
      return "custom";
    }
    if (
      valueEnd.getTime() - props.endDate <= 2 * 24 * 3600 * 1000 &&
      valueEnd.getTime() - props.endDate >= 24 * 3600 * 1000
    ) {
      let remainingTime = valueEnd.getTime() - valueStart.getTime();
      if (remainingTime <= 24 * 3600 * 1000) {
        return "yesterday";
      }
    }
    return "custom";
  };
  const makeRange = range => {
    setValueStart(new Date(Date.now() - range));
    setValueEnd(new Date(Date.now() - 24 * 3600 * 1000));
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
            <div
              className={`${styles.buttonFilter} ${
                (checkRange() === "today" && styles.active) || ""
              }`}
              onClick={() => makeRange(24 * 3600 * 1000)}
            >
              <p>Today</p>
            </div>
            <div
              className={`${styles.buttonFilter} ${
                (checkRange() === "yesterday" && styles.active) || ""
              }`}
              onClick={() => makeRange(2 * 24 * 3600 * 1000)}
            >
              <p>Yesterday</p>
            </div>
            <div
              className={`${styles.buttonFilter} ${
                (checkRange() === "last-7" && styles.active) || ""
              }`}
              onClick={() => makeRange(7 * 24 * 3600 * 1000)}
            >
              <p>Last 7 Days</p>
            </div>
            <div
              className={`${styles.buttonFilter} ${
                (checkRange() === "last-30" && styles.active) || ""
              }`}
              onClick={() => makeRange(30 * 24 * 3600 * 1000)}
            >
              <p>Last 30 Days</p>
            </div>
            <div
              className={`${styles.buttonFilter} ${
                (checkRange() === "month" && styles.active) || ""
              }`}
            >
              <p>This Month</p>
            </div>
            <div
              className={`${styles.buttonFilter} ${
                (checkRange() === "custom" && styles.active) || ""
              }`}
            >
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
              minDate={new Date(valueEnd.getTime() - 6 * 30 * 24 * 3600 * 1000)}
              maxDate={new Date(valueEnd.getTime())}
            />
            <Calendar
              value={valueEnd}
              onChange={setValueEnd}
              maxDate={new Date(Date.now() - 24 * 3600 * 1000)}
              minDate={new Date(valueStart.getTime())}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

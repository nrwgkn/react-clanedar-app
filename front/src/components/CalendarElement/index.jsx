import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";

const CalendarElement = ({ day }) => {
  const isFirstDay = day.date() === 1;
  const format = isFirstDay ? "M月D日" : "D";
  // 当日かどうか判断
  const today = dayjs();
  const compareFormat = "YYYYMMDD";
  const isToday = day.format(compareFormat) === today.format(compareFormat);
  // 今月以外をグレーダウン
  const isCurrentMonth = day.month() === today.month();
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;

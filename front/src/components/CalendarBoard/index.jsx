import React from "react";
import CalendarElement from "../CalendarElement";
import { GridList } from "@material-ui/core";
import * as styles from "./style.css";

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

const createCalendar = () => {
  // 今月の最初の日を取得
  const firstDay = dayjs().startOf("month");
  // 最初の日の曜日の index を取得
  const firstDayIndex = firstDay.day();

  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");

      return day;
    });
};

const calendar = createCalendar();

const CalendarBoard = () => {
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {calendar.map((c) => (
          <li key={c.toISOString()}>
            <CalendarElement>{c.format("D")}</CalendarElement>
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;

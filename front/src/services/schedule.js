import dayjs from "dayjs";
import { isSameDay } from "./calendar";

export const setSchedules = (calendar, schedules) =>
  calendar.map((c) => ({
    // calendar を map して date にセット
    date: c,
    // 引数として受け取った schedules のうち map されたそれぞれの calendar の日付に一致するものだけを filter してセット
    schedules: schedules.filter((e) => isSameDay(e.date, c)),
  }));

export const formatSchedule = (schedule) => ({
  ...schedule,
  // date を dayjs インスタンスに変換
  date: dayjs(schedule.date),
});

export const isCloseDialog = (schedule) => {
  const message = "保存されていない変更を破棄しますか？";

  return isScheduleEmpty(schedule) || window.confirm(message);
};

const isScheduleEmpty = (schedule) =>
  !schedule.title && !schedule.description && !schedule.location;

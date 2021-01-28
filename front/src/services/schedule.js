import { isSameDay } from "./calendar";

export const setSchedules = (calendar, schedules) =>
  calendar.map((c) => ({
    // calendar を map して date にセット
    date: c,
    // 引数として受け取った schedules のうち map されたそれぞれの calendar の日付に一致するものだけを filter してセット
    schedules: schedules.filter((e) => isSameDay(e.date, c)),
  }));

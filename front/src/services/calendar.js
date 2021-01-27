import dayjs from "dayjs";

export const createCalendar = () => {
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

import dayjs from "dayjs";

export const createCalendar = (month) => {
  // 今月の最初の日を取得
  const firstDay = getMonth(month);
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

// その月の dayjs インスタンスを返す
// dayjs は完全な日付でなくても月や年の情報があれば他をゼロ値で初期化する
export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};

export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
};

export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};

export const isFirstDay = (day) => day.date() === 1;

export const getNextMonth = (month) => {
  // 日付として演算するために dayjs インスタンスに変換
  const day = getMonth(month).add(1, "month");
  // 元のフォーマットに戻す
  return formatMonth(day);
};

export const getPreviousMonth = (month) => {
  const day = getMonth(month).add(-1, "month");
  return formatMonth(day);
};

export const formatMonth = (day) => ({
  month: day.month() + 1,
  year: day.year(),
});

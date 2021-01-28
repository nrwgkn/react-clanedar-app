import {
  schedulesSetLoading,
  schedulesFetchItem,
  schedulesAddItem,
} from "./actions";
import { get, post } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

// 非同期処理
export const asyncSchedulesFetchItem = ({ month, year }) => async (
  dispatch
) => {
  // loading: true にする action を dispatch
  dispatch(schedulesSetLoading());

  // 指定された月の予定を取得する API
  // 非同期処理が終わるまで処理をブロック
  // Promise の中身だけを result に格納
  const result = await get(`schedules?month=${month}&year=${year}`);

  // date はこのままの形だと日付の操作ができないため dayjs インスタンスに変換
  // 新しい配列を返す
  const formatedSchedule = result.map((r) => formatSchedule(r));

  // redux の状態として扱えるようになった formatedSchedule を dispatch
  dispatch(schedulesFetchItem(formatedSchedule));
};

export const asyncSchedulesAddItem = (schedule) => async (dispatch) => {
  // loading: true にする
  dispatch(schedulesSetLoading());

  // schedule を受け取り日付を ISOString という規格に変換
  const body = { ...schedule, date: schedule.date.toISOString() };
  // POST が成功すると追加された予定が返ってくる
  const result = await post("schedules", body);

  // date はこのままの形だと日付の操作ができないため dayjs インスタンスに変換
  const newSchedule = formatSchedule(result);
  // redux の状態として扱えるようになった newSchedule を dispatch
  dispatch(schedulesAddItem(newSchedule));
};

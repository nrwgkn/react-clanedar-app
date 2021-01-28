import { schedulesSetLoading, schedulesFetchItem } from "./actions";
import { get } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

// 非同期処理
export const asyncSchedulesFetchItem = ({ month, year }) => async (
  dispatch
) => {
  // loading: trueにする action を dispatch
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

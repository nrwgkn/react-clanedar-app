// container は redux からの state と redux に dispatch する関数を props として提供するためのコンポーネント
import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";
import { setSchedules } from "../../services/schedule";
import {
  addScheduleOpenDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";
import {
  currentScheduleSetItem,
  currentScheduleOpenDialog,
} from "../../redux/currentSchedule/actions";
import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";

// 状態の変更の監視を行い、store から必要な状態を選択して props の形にする
const mapStateToProps = (state) => ({
  calendar: state.calendar,
  schedules: state.schedules,
});

const mapDisapatchToProps = (dispatch) => ({
  openAddScheduleDialog: (d) => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({ date: d }));
  },

  openCurrentScheduleDialog: (schedule, e) => {
    // 他のイベントが発火するのをキャンセル
    e.stopPropagation();

    dispatch(currentScheduleSetItem(schedule));
    dispatch(currentScheduleOpenDialog());
  },

  // この時点では取得するべき月の情報がない
  fetchSchedule: (month) => {
    dispatch(asyncSchedulesFetchItem(month));
  },
});

// mergeProps: mapStateToProps で生成された props と mapDisapatchToProps で生成された props を引数にとり、コンポーネントで使う形に整形して渡す関数
// mergeProps を独自に定義した場合は、自分で stateProps や dispatchProps を return してやらないと mergeProps で return したものしかコンポーネントに渡らない
// mapStateToProps の結果が前回と異なっていたときにだけ実行
const mergeProps = (stateProps, dispatchProps) => {
  const {
    calendar: month,
    schedules: { items: schedules },
  } = stateProps;
  const calendar = setSchedules(createCalendar(month), schedules);

  return {
    ...stateProps,
    ...dispatchProps,
    // 現在の月情報を state から取得、それを元に fetchSchedule を呼び出して必要な予定を取得する
    fetchSchedule: () => dispatchProps.fetchSchedule(month),
    calendar,
    month,
  };
};

export default connect(
  mapStateToProps,
  mapDisapatchToProps,
  mergeProps
)(CalendarBoard);

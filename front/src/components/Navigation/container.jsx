import Navigation from "./presentation";
import { connect } from "react-redux";
import {
  getNextMonth,
  getPreviousMonth,
  getMonth,
  formatMonth,
} from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";
import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";

const mapStateToProps = (state) => ({ calendar: state.calendar });

const mapDispatchToProps = (dispatch) => ({
  setMonth: (month) => {
    dispatch(calendarSetMonth(month));
  },
  fetchItem: (month) => {
    dispatch(asyncSchedulesFetchItem(month));
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  // redux の state → dayjs に変換して props として渡す
  // value: Datepicker の日付が現在表示されている日付に連動する（2021/02が表示されている状態で開くと2021/02が表示）
  month: getMonth(stateProps.calendar),

  // onClick: 次月を表示
  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calendar);
    dispatchProps.setMonth(nextMonth);
    dispatchProps.fetchItem(nextMonth);
  },

  // onClick: 前月を表示
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calendar);
    dispatchProps.setMonth(previousMonth);
    dispatchProps.fetchItem(previousMonth);
  },

  // onChange: Datepicker での月選択時
  // 変更があったら dayjs → redux の state に変換して dispatch
  setMonth: (dayObj) => {
    const month = formatMonth(dayObj);
    dispatchProps.setMonth(month);
    dispatchProps.fetchItem(month);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);

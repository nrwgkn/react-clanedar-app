import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";
import {
  addScheduleCloseDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";
import { schedulesAddItem } from "../../redux/schedules/actions";

const mapStateToProps = (state) => ({ schedule: state.addSchedule });

const mapDisapatchToProps = (dispatch) => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule: (value) => {
    dispatch(addScheduleSetValue(value));
  },
  saveSchedule: (schedule) => {
    // 引数に schedule が必要だがここでは取得できないので、受け取った値をそのまま dispatch
    dispatch(schedulesAddItem(schedule));
    dispatch(addScheduleCloseDialog());
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  // schedule を stateProps から取得できる
  saveSchedule: () => {
    const {
      schedule: { form: schedule },
    } = stateProps;
    dispatchProps.saveSchedule(schedule);
  },
});

export default connect(
  mapStateToProps,
  mapDisapatchToProps,
  mergeProps
)(AddScheduleDialog);

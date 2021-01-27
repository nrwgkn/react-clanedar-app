import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer";

// {[state名]: [reducer]} で対応付け
const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer,
});

export default rootReducer;

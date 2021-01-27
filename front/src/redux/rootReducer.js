import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";

// {[state名]: [reducer]} で対応付け
const rootReducer = combineReducers({ calendar: calendarReducer });

export default rootReducer;

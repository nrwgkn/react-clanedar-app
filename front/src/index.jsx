import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import rootReducer from "./redux/rootReducer";
import CalendarBoard from "./components/CalendarBoard/container";
import Navigation from "./components/Navigation/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";

const store = createStore(rootReducer);

dayjs.locale("ja");

const App = () => (
  // connect しないとコンポーネントから参照することはできない
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));

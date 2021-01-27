import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import rootReducer from "./redux/rootReducer";
import CalendarBoard from "./components/CalendarBoard/container";
import Navigation from "./components/Navigation/container";

const store = createStore(rootReducer);

dayjs.locale("ja");

const App = () => (
  // connect しないとコンポーネントから参照することはできない
  <Provider store={store}>
    <Navigation />
    <CalendarBoard />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));

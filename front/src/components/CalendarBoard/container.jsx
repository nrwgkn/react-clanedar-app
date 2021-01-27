// container は redux からの state と redux に dispatch する関数を props として提供するためのコンポーネント
import { connect } from "react-redux";
import CalendarBoard from "./presentation";

// store から必要な状態を選択して props の形にする
const mapStateToProps = (state) => ({ calendar: state.calendar });

export default connect(mapStateToProps)(CalendarBoard);

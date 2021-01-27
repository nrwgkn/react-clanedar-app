// container は redux からの state と redux に dispatch する関数を props として提供するためのコンポーネント
import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";

// 状態の変更の監視を行い、store から必要な状態を選択して props の形にする
const mapStateToProps = (state) => ({ calendar: state.calendar });

// mergeProps: mapStateToProps で生成された props と mapDisapatchToProps で生成された props を引数にとり、コンポーネントで使う形に整形して渡す関数
// mapStateToPropsの結果が前回と異なっていたときにだけ実行
const mergeProps = (stateProps) => ({
  calendar: createCalendar(stateProps.calendar),
});

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);

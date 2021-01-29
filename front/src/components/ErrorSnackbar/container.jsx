import { connect } from "react-redux";
import Errorsnackbar from "./presentation";
import { schedulesResetError } from "../../redux/schedules/actions";

// エラーが dispatch されたときにだけコンポーネント内部の処理が実行される
const mapStateToProps = (state) => ({ error: state.schedules.error });

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(schedulesResetError());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Errorsnackbar);

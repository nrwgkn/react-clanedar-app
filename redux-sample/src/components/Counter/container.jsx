import { connect } from "react-redux";

import { increment, decrement } from "../../redux/count/actions";

import Counter from "./presentation";

// store からどの state を引っ張ってくるか
// store の現在の状態を引き数として受け取って必要なものだけを props に流す
const mapStateToProps = ({ count }) => ({ count });

// const mapStateProps = (state) => {
//   return { count: state.count };
// };

// どんな dispatcher を props に渡すか
// 引き数に dispatch を受け取って、必要な action だけを dispatch する関数を定義して props として渡す
const mapDispatchToProps = (dispatch) => ({
  increment: (count) => {
    dispatch(increment(count));
  },
  decrement: (count) => {
    dispatch(decrement(count));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

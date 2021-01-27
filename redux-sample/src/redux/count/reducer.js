import { INCREMENT, DECREMENT } from "./constants";

const initState = 0;

// action は分割代入を利用して展開してから受け取る
// 直接変更せずに、新しい state を返す
export const count = (state = initState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
};

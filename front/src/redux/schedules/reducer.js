import { SCHEDULES_ADD_ITEM } from "./actions";

const init = {
  items: [],
  isLoading: false,
};

const schedulesReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case SCHEDULES_ADD_ITEM:
      return {
        ...state,
        // 前回の items に payload として渡ってきた新規の予定を追加した配列を返
        items: [...state.items, { ...payload, id: state.items.length + 1 }],
      };
    default:
      return state;
  }
};

export default schedulesReducer;

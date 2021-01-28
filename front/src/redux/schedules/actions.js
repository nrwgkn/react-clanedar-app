// constants
export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEM";

// actions
export const schedulesAddItem = (payload) => ({
  type: SCHEDULES_ADD_ITEM,
  // dialog から作成した schedule.form を渡す
  payload,
});

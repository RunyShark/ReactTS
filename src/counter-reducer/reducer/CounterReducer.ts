import { CounterAction, CounterState } from "../";

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { couter, changes } = state;
  switch (action.type) {
    case "increasBy":
      return {
        couter: couter + action.payload.value,
        previus: couter,
        changes: changes + 1,
      };
    case "restart":
      return {
        couter: 0,
        previus: 0,
        changes: 0,
      };

    default:
      return state;
  }
};

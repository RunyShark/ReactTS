export type CounterAction =
  | { type: "increasBy"; payload: { value: number } }
  | { type: "restart" };

export const doReset = (): CounterAction => ({ type: "restart" });

export const doIncreasBy = (value: number): CounterAction => ({
  type: "increasBy",
  payload: {
    value,
  },
});

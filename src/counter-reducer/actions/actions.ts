export type CounterAction =
  | { type: "increasBy"; payload: { value: number } }
  | { type: "restart" };

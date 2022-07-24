import { useReducer } from "react";
interface CounterState {
  couter: number;
  previus: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  couter: 0,
  previus: 0,
  changes: 0,
};

type CounterAction =
  | { type: "increasBy"; payload: { value: number } }
  | { type: "restart" };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increasBy":
      return {
        couter: state.couter + action.payload.value,
        previus: (state.previus = state.couter),
        changes: state.changes + 1,
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

export const ConunterReducerComponent = () => {
  const [{ couter, previus, changes }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const handleReset = () => {
    dispatch({ type: "restart" });
  };
  const increaseBy = (value: number) => {
    dispatch({
      type: "increasBy",
      payload: {
        value,
      },
    });
  };

  return (
    <>
      <h1>ConunetReducer: {couter}</h1>
      <h2>previus: {previus}</h2>
      <h2>changes: {changes}</h2>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
    </>
  );
};

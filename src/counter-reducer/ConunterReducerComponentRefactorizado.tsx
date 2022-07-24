import { useReducer } from "react";
import { CounterState, counterReducer, doReset, doIncreasBy } from "./";

const INITIAL_STATE: CounterState = {
  couter: 0,
  previus: 0,
  changes: 0,
};

export const ConunterReducerComponentRefactorizado = () => {
  const [{ couter, previus, changes }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const handleReset = () => {
    dispatch(doReset());
  };
  const increaseBy = (value: number) => {
    dispatch(doIncreasBy(value));
  };

  return (
    <>
      <h1>ConunetReducer segmentado: {couter}</h1>
      <h2>previus: {previus}</h2>
      <h2>changes: {changes}</h2>

      <button onClick={handleReset}>Reset</button>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
    </>
  );
};

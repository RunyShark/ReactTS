import { useState } from "react";
interface Props {
  value?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const ConunterBy = ({ value = 0 }: Props) => {
  const [counter, setcounter] = useState<CounterState>({
    counter: value,
    clicks: 0,
  });
  const { counter: counterTag, clicks } = counter;

  const handleClick = (value: number) => {
    setcounter(({ counter, clicks }) => ({
      counter: counter + value,
      clicks: clicks + 1,
    }));
  };
  return (
    <>
      <h1>Counter:{counterTag}</h1>
      <h1>click:{clicks}</h1>
      <button onClick={() => handleClick(1)}>1+</button>
      <button onClick={() => handleClick(5)}>5+</button>
    </>
  );
};

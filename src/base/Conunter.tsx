import { useState } from "react";

export const Conunter = ({ value = 0 }) => {
  const [counter, setcounter] = useState(value);

  return (
    <>
      <h1>Conunet: {counter}</h1>
      <button onClick={() => setcounter((counter) => counter + 1)}>1+</button>
      <button onClick={() => setcounter(counter !== 0 ? counter - 1 : 0)}>
        1-
      </button>
    </>
  );
};

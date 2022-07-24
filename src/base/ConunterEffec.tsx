import { useEffect, useState } from "react";
const MAXIMUN_COUNT: number = 10;
export const ConunterEffec = () => {
  const [counter, setcounter] = useState(5);

  useEffect(() => {
    if (counter < 10) return;
    console.log("%cSe llego al valor maximo", "color:red;");
  }, [counter]);

  const haddleClick = () => {
    setcounter(counter === MAXIMUN_COUNT ? 0 : counter + 1);
  };

  return (
    <>
      <h1>Conunet Effect: {counter}</h1>
      <button onClick={haddleClick}>1+</button>
      <button onClick={() => setcounter(counter !== 0 ? counter - 1 : 0)}>
        1-
      </button>
    </>
  );
};

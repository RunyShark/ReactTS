import { useCounter } from "../index/index";

export const ConunterHook = () => {
  const { counter, haddleClick, animation } = useCounter({
    maxCount: 15,
  });

  return (
    <>
      <h1>Conunet Effect: </h1>
      <h2 ref={animation}>{counter}</h2>
      <button onClick={haddleClick}>1+</button>
    </>
  );
};

import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
const MAXIMUN_COUNT: number = 10;
export const ConunterEffec = () => {
  const [counter, setcounter] = useState(5);
  const animation = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (counter < 10) return;
    console.log("%cSe llego al valor maximo", "color:red;");

    const tl = gsap.timeline();

    tl.to(animation.current, { y: -10, duration: 0.2, ease: "ease.out" }).to(
      animation.current,
      { y: 0, duration: 1, ease: "bounce.out" }
    );
  }, [counter]);

  const haddleClick = () => {
    setcounter((counter) => Math.min(counter + 1, MAXIMUN_COUNT));
  };

  return (
    <>
      <h1>Conunet Effect: </h1>
      <h2 ref={animation}>{counter}</h2>
      <button onClick={haddleClick}>1+</button>
      <button onClick={() => setcounter(counter !== 0 ? counter - 1 : 0)}>
        1-
      </button>
    </>
  );
};

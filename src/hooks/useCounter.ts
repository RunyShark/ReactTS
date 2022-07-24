import { useState, useRef, useLayoutEffect, useEffect } from "react";

import { gsap } from "gsap";

export const useCounter = ({ maxCount = 1 }) => {
  const [counter, setcounter] = useState(5);

  const animation = useRef<any>(null);
  const tl = useRef(gsap.timeline());

  useLayoutEffect(() => {
    if (!animation.current) return;
    tl.current
      .to(animation.current, { y: -10, duration: 0.2, ease: "ease.out" })
      .to(animation.current, { y: 0, duration: 1, ease: "bounce.out" })
      .pause();
  }, []);

  useEffect(() => {
    if (counter < maxCount) return;
    tl.current.play(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const haddleClick = () => {
    setcounter((counter) => Math.min(counter + 1, maxCount));
  };

  return {
    counter,
    haddleClick,
    animation,
  };
};

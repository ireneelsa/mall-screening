import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const CounterNumber = ({ value, suffix = '', prefix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;

    let frame = 0;
    const totalFrames = 56;
    const timer = setInterval(() => {
      frame += 1;
      setCount(Math.round((value * frame) / totalFrames));
      if (frame >= totalFrames) clearInterval(timer);
    }, 22);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default CounterNumber;

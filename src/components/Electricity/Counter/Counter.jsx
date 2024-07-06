import { useState, useEffect } from 'react';
import * as s from './Counter.styled';

const Counter = () => {
  const randomNumber =
    Math.floor(Math.random() * (1300000000 - 1000000000 + 1)) + 1000000000;
  const [count, setCount] = useState(randomNumber);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  const formattedCount = count.toLocaleString('de-DE');

  return (
    <s.Wrapper>
      <s.Count>{formattedCount}</s.Count>
      <s.Units>kWh</s.Units>
    </s.Wrapper>
  );
};

export default Counter;

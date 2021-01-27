import React from "react";

const Counter = ({ count, increment, decrement }) => (
  <>
    <div>{count}</div>
    <button onClick={() => increment(2)}>+</button>
    <button onClick={() => decrement(2)}>-</button>
  </>
);

export default Counter;

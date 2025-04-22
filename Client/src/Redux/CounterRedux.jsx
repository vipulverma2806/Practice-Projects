
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './CounterSlice';

function CounterRedux() {
  const count = useSelector((store) => store.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}

export default CounterRedux;

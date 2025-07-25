import React, { useState } from 'react';
import '../css/Counter.css'; 
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div className="counter-container">
      <h2>Counter</h2>
      <div className="counter-box">
        <button onClick={decrement} className="counter-button">-</button>
        <span className="counter-value">{count}</span>
        <button onClick={increment} className="counter-button">+</button>
      </div>
    </div>
  );
}

export default Counter;

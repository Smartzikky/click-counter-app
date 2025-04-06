port React, { useState } from 'react';
import './ClickCounter.css';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className="container">
      <h1>Click Counter</h1>
      <p>You clicked {count} times</p>

      {count === 0 && (
        <p className="warning">⚠️ You have reached the limit!</p>
      )}

      <div className="button-group">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease} disabled={count === 0}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default ClickCounter;

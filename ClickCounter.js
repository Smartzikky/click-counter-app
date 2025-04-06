import React, { useState } from 'react';
import './ClickCounter.css';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="container">
      <h1>Click Counter</h1>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default ClickCounter;

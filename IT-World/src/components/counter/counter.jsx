import './counter.css' 
import React, { useState } from 'react';
function ClickCounter() {
  const [count, setCount] = useState(0);
  const handleButtonClick = (operation) => {
    if (operation === 'increment') {
      setCount(count + 1);
    } else if (operation === 'decrement') {
        if (count > 0) {
            setCount(count - 1);
        }
    }
  };
  return (
    <div className='Counter'>
      <button  onClick={() => handleButtonClick('decrement')} > -</button>
      <span>{count}</span>
      <button onClick={() => handleButtonClick('increment')}>+</button>
    </div>
  );
}
export default ClickCounter;
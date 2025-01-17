import { useState } from 'react';
function Counter() {

    let [count, setCount] = useState(0);

    const handleClick = () => {
        const newValue = count + 1;
        setCount(newValue);
      };
    
    return (
        <div className="container">
          <div className="counter-value">Giá trị: {count}</div>
          <div className="button-container">
            <button onClick={handleClick}>Tăng</button>
          </div>
        </div>
      );
}

export default Counter;

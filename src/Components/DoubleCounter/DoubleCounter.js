import React, { useState } from 'react';

const DoubleCounter = () => {

    const [count,setCount] = useState(0);
    
    const handleDoubleCounter = () => {
        setCount(count + 1);

        setCount(count + 1);
  
        // setCount(count => count + 1);
        // setCount(count => count + 1);
    }

    return (
        <div  className="counter">
            <button onClick={handleDoubleCounter}>Double</button>
            <div>{count}</div>
        </div>
    );
};

export default DoubleCounter;
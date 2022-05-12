import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(1);
    const handleCount = () => {
        setCount(count+1);
        
    }
    useEffect(() => {
        if(count % 3 === 0) {
            alert('chia het cho 3');
        }
        // handleCount();
    },[count])
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={handleCount}>UP</button>
        </div>
    );
};

export default Counter;
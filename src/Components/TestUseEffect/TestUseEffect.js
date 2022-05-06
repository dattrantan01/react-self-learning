import React, { useState, useEffect, useRef } from 'react';


const TestUseEffect = () => {
    const [count, setCount] = useState(5);
    let timeRef = useRef(null);
    const handleCount = () => {
        if(timeRef.current) return;

        timeRef.current = setInterval(() =>{    
            setCount(prev => prev - 1);
        }, 1000);
        
    }
    const handleStop = () => {
        clearInterval(timeRef.current);
        timeRef.current = null;
    }
    useEffect(() => {
        if(count === 0){
            clearInterval(timeRef.current);
        }
       
    },[count]);
    useEffect(() => {
        return () => {
            clearInterval(timeRef.current);
        }
    },[])

    return (
        <div className="text-center ">
            <h2 className="text-5xl">{count}</h2>
            <button onClick={handleCount} className="inline-block px-6 py-3 bg-purple-500 text-white cursor-pointer m-3 rounded-lg">Count Down</button>
            <button onClick={handleStop} className="inline-block px-6 py-3 bg-purple-500 text-white cursor-pointer rounded-lg">Stop</button>
                           
        </div>
    );
};

export default TestUseEffect;
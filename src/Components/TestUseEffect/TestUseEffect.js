import React, { useState, useEffect, useRef } from 'react';


const TestUseEffect = () => {
    const [count, setCount] = useState(180);
  
    // useEffect(() => { 
    //     if(count > 0){
    //         const time =setTimeout(() =>{
    //             setCount(count - 1)
    //         }, 1000);
    //     }
    // },[count])
    // if(count > 0){
    //     setTimeout(() =>{
    //         setCount(count - 1)
    //     }, 1000);
    // }
    let time = useRef();
    const handleCount = () => {
        // console.log("press");
        clearInterval(time.current);
        if(count > 0){
                time.current = setInterval(() =>{
                    setCount(prev => prev - 1)
                }, 1000);
            }
    }
    const handleStop = () => {
        clearInterval(time.current)
    }

    return (
        <div className="text-center ">
            <h2 className="text-5xl">{count}</h2>
            <button onClick={handleCount} className="inline-block px-6 py-3 bg-purple-500 text-white cursor-pointer m-3">Count Down</button>
            <button onClick={handleStop} className="inline-block px-6 py-3 bg-purple-500 text-white cursor-pointer">Stop</button>
                           
        </div>
    );
};

export default TestUseEffect;
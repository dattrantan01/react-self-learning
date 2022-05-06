import React, { useEffect, useRef } from 'react';

const Input = () => {

    const inputRef = useRef();
    useEffect(() => {
        if(inputRef.current) inputRef.current.focus();
    },[])
    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="Auto focus"
                className="inline-block p-5 border border-gray-300 focus:border-blue-400"
            />
            
        </div>
    );
};

export default Input;
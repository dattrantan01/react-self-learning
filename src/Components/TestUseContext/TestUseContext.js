import React, { useContext, useState } from 'react';


const CountContext = React.createContext();
const CountProvider = (props) => {
    const [count, setCount] = useState(0);
    const value = [count, setCount]
    return (
        <CountContext.Provider value={value} {...props}></CountContext.Provider>
    )
}
const CountDisplay = () => { 
    let [count] = useContext(CountContext)
    return <div>Count: {count}</div>
}
const Counter = () => {
    const [,setCount] = useContext(CountContext);
    const increment = () => setCount(count => count + 1);
    return (
        <button
            onClick={increment}
            className="p-4 rounded-lg text-white font-semibold bg-purple-500"
        >
            Increase
        </button>
    )
}

const TestUseContext = () => {
    return (
      <div className="p-4 flex items-center justify-center gap-x-5">    
        <CountProvider>
            <CountDisplay></CountDisplay>
            <Counter></Counter>
        </CountProvider>
      </div>
    );
};

export default TestUseContext;
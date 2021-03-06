import { useEffect, useState } from "react";

export default function useDebounce(initialValue = "", delay = 1000) {
    const [debounce, setDebounce] = useState(initialValue);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(initialValue);
            // console.log("useDebounce");
        }, delay);
        return () => {
            clearTimeout(timer);
        };
    }, [delay, initialValue]);
    return debounce;
}
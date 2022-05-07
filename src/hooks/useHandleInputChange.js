import { useState } from "react";

export default function useHandleInputChange(initialValue) {
    const [value, setValue] = useState(initialValue);
    const handleValueChange = (e) => {
        const type = e.target.type;
        setValue({
            ...value,
            [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
        })
    }
    return {
        value,
        setValue,
        handleValueChange
    }
}
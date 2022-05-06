import React, { useEffect, useRef, useState } from 'react';

const TextareaAutoResize = () => {
    const [text, setText] = useState("");
    const textareaRef = useRef();
    const [textareaHeight, setTextareaHeight] = useState("100px");


    console.log("render",textareaHeight? textareaHeight : "rendering",textareaRef.current? textareaRef.current.scrollHeight:"render");
    const handleChange = (e) => {
        setTextareaHeight('100px');
        setText(e.target.value);
    }
    useEffect(() => {
        console.log(textareaRef.current.scrollHeight);
        setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
    },[text])
    return (
        <div className="p-5">
            <textarea
                className="w-full max-w-[400px] p-3 rounded-lg border border-gray-300 focus:border-blue-500 resize-none overflow-hidden"
                placeholder="Enter your text here..."
                value={text}
                ref={textareaRef}
                style={{
                    height: textareaHeight,
                    
                }}
                onChange={handleChange}
            >

            </textarea>
        </div>
    );
};

export default TextareaAutoResize;
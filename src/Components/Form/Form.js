import React, { useState } from 'react';

const Form = () => {
    // const [text, setText] = useState("");
    // const [textarea, setTextarea] = useState("");
    // const [select, setSelect] = useState("");
    // const handleTextChange = (e) => {
    //     setText(e.target.value);
    // }
    // const handleTextareaChange = (e) => {
    //     setTextarea(e.target.value);
    // }
    // const handleSelectChange = (e) => {
    //     setSelect(e.target.value);
    // }
    // return (
    //     <div className="p-5">
    //         {text}
    //         <input
    //             name="text"
    //             className="border border-gray-300 p-5 focus:border-blue-400 block"
    //             placeholder="Enter text here ..."
    //             value={text}
    //             onChange={handleTextChange}
    //         />
    //          {textarea}
    //         <textarea 
    //             className="border border-gray-300 p-5 focus:border-blue-400 block resize-none overflow-hidden"
    //             placeholder="Enter text here ..."
    //             value={textarea}
    //             onChange={handleTextareaChange}
    //         />
    //         {select}
    //         <select name="language" className="border border-gray-200 p-5 " onChange={handleSelectChange}>
    //             <option value="js">Javascript</option>
    //             <option value="html">html</option>
    //             <option value="css">css</option>
    //         </select>
    //     </div>
    // );
    const [error, setError] = useState();
    const [value, setValue] = useState({
        name: "",
        email: "",
        hobby: ""
    });
    const handleValueChange = (e) => {
        const type = e.target.type;
        setValue({
            ...value,
            [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
        })
    }
    const handleSubmit = (e) => {
        // preventDefault tranh load lai trang
        e.preventDefault();
        if(value.name === ""){
            setError("fill this text please");
        }
        else {
            setError("");
        }
    }
    return (
        <div>
            <form className="flex gap-x-3" onSubmit={handleSubmit}>
                {error}
                <input 
                    type="text"
                    name="name"
                    className="border border-gray-300 p-5 focus:border-blue-400 block w-[400px]"
                    placeholder="Enter your name here"
                    onChange={handleValueChange}
                />
                <input 
                    type="email"
                    name="email"
                    className="border border-gray-300 p-5 focus:border-blue-400 block w-[400px]"
                    placeholder="Enter your Email here"
                    onChange={handleValueChange}
                />
                <input type="checkbox" name="hobby" onChange={handleValueChange} />
                <button type="submit" className="border p-5 bg-cyan-500 text-white rounded-lg">Submit</button>
            </form>
        </div>
    );
};

export default Form;

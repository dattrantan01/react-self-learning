import useHandleInputChange from "../../hooks/useHandleInputChange";

const Form2 = () => {
    const {  handleValueChange } = useHandleInputChange(
    {   name: "",
        email: "",
        hobby: false
    });    
    return (
        <div>
            <form className="flex gap-x-3">
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
            </form>
        </div>
    );
};

export default Form2;
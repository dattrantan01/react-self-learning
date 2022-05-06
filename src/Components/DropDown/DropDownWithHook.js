import useClickOutSide from '../../hooks/useClickOutSide';

const DropDownWithHook = () => {
    const {show, nodeRef, setShow} = useClickOutSide();
    return (
        <div className="mt-8">
            <div className="relative max-w-[400px] ml-auto mr-auto" ref={nodeRef}>
                <div className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
                    onClick={() => setShow(!show)}
                >
                    Selected
                </div>
                {show && <div className="border border-gray-200 rounded-lg absolute top-full left-0 w-full" >
                    <div className="p-5 cursor-pointer border-b border-gray-200 hover:bg-slate-400 rounded-lg">Javascript</div>
                    <div className="p-5 cursor-pointer border-b border-gray-200 hover:bg-slate-400 rounded-lg">React</div>
                    <div className="p-5 cursor-pointer border-b border-gray-200 hover:bg-slate-400 rounded-lg">html</div>
                    <div className="p-5 cursor-pointer border-b border-gray-200 hover:bg-slate-400 rounded-lg">css</div>
                </div>}
            </div>
       </div>
    );
};

export default DropDownWithHook;
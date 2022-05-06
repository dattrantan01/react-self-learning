import useClickOutSide from '../../hooks/useClickOutSide';
import SideBarMenu from './SideBarMenu';

const SideBarMenuBtn = () => {
  
    const {show, nodeRef, setShow} = useClickOutSide();
    return (
        <div className="p-5">
            <button className="border bg-purple-500 text-white p-3 rounded-lg"
                onClick={()=> setShow(!show)}
            >
                Show Menu
            </button>
            <SideBarMenu show={show} ref={nodeRef}></SideBarMenu>
        </div>
    );
};

export default SideBarMenuBtn;
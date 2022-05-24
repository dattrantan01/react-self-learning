import React from 'react';
import useHover from '../../hooks/useHover'

const Tooltip = ({children, text}) => {
    const {hovered, nodeRef} = useHover()
    return (
        <div className="mt-[100px] text-center relative">
            <p>lorem ipsum dolor</p>
            { hovered && <ToolTipContext>{children}</ToolTipContext>}
            <span className="font-semibold block" ref={nodeRef}>
                {text}
            </span>
        </div>
    );
};
const ToolTipContext = (props) => {
    return (
        <p className="p-3 bg-black text-white rounded-xl inline-block mx-auto absolute -translate-x-1/2 -translate-y-full max-w-[200px]">{props.children}</p>
    )
}

export default Tooltip;
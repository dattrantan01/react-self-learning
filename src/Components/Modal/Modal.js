import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    return ReactDOM.createPortal(
        (<div className={`fixed inset-0 z-50 flex items-center justify-center p-5 modal ${props.open ? "" : "opacity-0 invisible"}`}>
            <div className="absolute inset-0 bg-black bg-opacity-25 overlay" onClick={props.handleClose}>

            </div>
            <div className="relative z-10 w-full p-10 bg-white rounded-lg modal-content max-w-[500px]">
                <span className="absolute top-0 right-0 cursor-pointer -translate-y-2/4 translate-x-2/4 flex items-center justify-center w-10 h-10 rounded-full bg-white" onClick={props.handleClose}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z" fill="#84878B"/>
                    </svg>
                </span>
                <h2 className="text-4xl text-center mb-5 font-medium text-purple-600">Welcome Back!</h2>
                <div className="flex flex-col gap-3 mb-5">
                    <label className="text-sm cursor-pointer" htmlFor="email">Email</label>
                    <input type="email" className="w-full text-sm rounded-lg p-4 border border-purple-400" id="email"/>
                </div>
                <div className="flex flex-col gap-3 mb-5">
                    <label className="text-sm cursor-pointer" htmlFor="password">Password</label>
                    <input type="password" className="w-full text-sm rounded-lg p-4 border border-purple-400" id="password"/>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="px-6 py-3 border border-purple-500 bg-purple-400 text-white rounded-lg">Submit</button>
                </div>
               
            </div>
        </div>),
        document.querySelector("body")
    );
};

export default Modal;
import React from 'react';

const CardTailwind = (props) => {


    return (
        
        <div className="relative w-[400px]">
            <div className="w-full rounded-lg h-[400px]">
                <img src="https://cdn.dribbble.com/users/2400293/screenshots/18034200/media/7c9ad36bd345b48cdb1a1db87ba5d096.png?compress=1&resize=1200x900&vertical=top" alt="" 
                    className="block w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-2 rounded-[20px] p-5 w-[calc(100%-36px)]">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-x-3">
                        <img src="https://images.unsplash.com/photo-1650827788529-d12062e0351f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt="" 
                        className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="font-light text-base text-[#333]">@hieulinux</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <img className="CardHeartIcon" src="/coolicon.svg" alt = ""/>
                        <span className="CardTopNumber"> 256 </span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                   <h3 className="text-lg font-medium">Cosmic Perspective</h3>
                   <span className={`text-lg font-bold text-transparent bg-clip-text ${props.CardBotNumber ? "bg-primary-gradient" : "bg-secondary-gradient"}`}>12000 vnd</span>
                </div>
            </div>
           
           
        </div>           
       
    );
};

export default CardTailwind;
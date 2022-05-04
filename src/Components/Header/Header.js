import React, { useEffect } from 'react';

const Header = () => {

    const handleFixedHeader = () => {
        const header = document.getElementById('header');
   
        if(window.scrollY > 100){
            header.classList.add('fixed');
        }
        else {
            header.classList.remove('fixed');
        }
    }
    useEffect(() => {
        console.log("call fixed");
        window.addEventListener('scroll',handleFixedHeader);
        return () => {
            console.log("remove call fixed");
            window.removeEventListener('scroll',handleFixedHeader);
        }
    },[])
    return (
        <div className="p-5 bg-black w-full" id="header">
            
        </div>
    );
};

export default Header;
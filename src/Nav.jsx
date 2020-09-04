import React from 'react';
import './nav.css';
import { useEffect } from 'react';
import { useState } from 'react';

const Nav = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() =>{
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        
    }, []);

    return (
        <div className={`nav ${show && "nav_black" }`}>
            <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix logo"/>
            <img className="nav_avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Netflix avatar" />
            
        </div>
    );
}

export default Nav;

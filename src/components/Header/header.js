import React from 'react';
import logo from '../../images/logo.png'
import './header.css';
const header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
         <nav>
                <a href="/home">home</a>
                <a href="/shop">shop</a>
                <a href="/review">review</a>
                <a href="/manage">manage</a>
                <input type="text" name="" id=""/>
          </nav>
        </div>
    );
}; 

export default header;

import React from 'react';
import './header.css';
import Navigation from '../Navigation';


const defaultImg = require('./logo.svg');

const Header = ({img}) => <div className="header">
        <div className="header_box">
                
        <div className="header_circle">
    <div className="header_img"> 
    <img src={img} />
    <div className="navright">
                        <Navigation /></div>
                        </div>
    
    </div>
    
    </div>
    
</div>;

Header.defaultProps = {
    img:defaultImg
}


export default Header;
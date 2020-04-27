
import React from 'react';
import './header.css';
import Navigation from '../Navigation';

const defaultImg = require('./logo.svg');
const hamburg1 = require('./hamburger.png');
const Header = ({img,hamburg1}) => <div className="header">
        <div className="header_box">
       
        <div className="hambur"><img src={hamburg1} /></div>


    <div className="header_circle">
    <div className="header_img"> 
    <img src={img} />

    </div>
    
    </div>
    
    </div>
  
</div>;

Header.defaultProps = {
    img:defaultImg,
    hamburg1:hamburg1
}


export default Header;
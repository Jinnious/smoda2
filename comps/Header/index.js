
import React from 'react';
import './header.css';


const defaultImg = require('./logo.svg');

const Header = ({img}) => <div className="header">
        <div className="header_box"></div>
        <div className="header_circle">
    <div className="header_img"> <img src={img} /></div>
    </div>
</div>;

Header.defaultProps = {
    img:defaultImg
}

<<<<<<< HEAD
//kk
=======


>>>>>>> 6d5be53eb479f3b6899fb1141f6ea9bfd95290cf
export default Header;
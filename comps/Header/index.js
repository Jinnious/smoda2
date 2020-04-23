
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


=======
const Header = ({text, bgcolor}) => <div 
style={{backgroundColor:bgcolor}}
className="header">
        {text}
</div>

Header.defaultProps = {
    text: "hi",
  

}

export default Header;
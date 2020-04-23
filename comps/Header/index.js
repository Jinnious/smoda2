
import React from 'react';
import './header.css';

const Header = ({text, bgcolor}) => <div 
style={{backgroundColor:bgcolor}}
className="header">
        {text}
</div>

Header.defaultProps = {
    text: "hi",
}
export default Header;
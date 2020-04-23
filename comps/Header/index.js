
import React from 'react';
import './header.css';

const BasicButton = ({text, bgcolor}) => <div 
style={{backgroundColor:bgcolor}}
className="custom_button_box">
        {text}
</div>

BasicButton.defaultProps = {
    text: "Default",
}
export default Header;
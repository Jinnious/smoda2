
import React from 'react';
import './header.css';

const Header = ({text, bgcolor}) => <div 
style={{backgroundColor:bgcolor}}
className="custom_button_box">
        {text}
</div>

// Header.defaultProps = {
//     text: "Default",
// }dsfsfsfsfsfsf
export default Header;
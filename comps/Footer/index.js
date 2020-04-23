
import React from 'react';
import './footer.css';

const Footer = ({text, bgcolor}) => <div 
style={{backgroundColor:bgcolor}}
className="custom_button_box">
        {text}
</div>

export default Footer;